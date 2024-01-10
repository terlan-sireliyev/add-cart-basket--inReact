import { useEffect, useState } from 'react';
import Cards from './Cards'
import styleApi from './style/Api.module.css'
import Category from './Category';
import Search_products from './Search_products'

export default function Amazon({ cart, handleClik }) {
    const [products, setProducts] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [sort, setSort] = useState('')
    const [slice, setSlice] = useState('')

    async function fetchData() {
        const res = await ((await fetch('https://fakestoreapi.com/products')).json())
        setProducts(res);
        setFilteredUsers(res)
    }
    useEffect(() => {
        async function dataFetch() {
            await fetchData()
        }
        dataFetch()

    }, []);

    //categor hissesi start
    const menuItem = [...new Set(products.map((val) => val.category))]
    const filterItems = (cat) => {
        const filter = products.filter((itemFil) => itemFil.category === cat)
        setProducts(filter)
    }
    //bunlarin hamsini Category.js - e yollayiriq
    //burda temiz islemir
    //categor hissesi end

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        if (searchTerm !== '') {
            const filteredItems = products.filter((user) =>
                user.title.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            setFilteredUsers(filteredItems);
        } else {
            setFilteredUsers(products)
        }
        setSearchItem(searchTerm)
    }
    return (
        <>
            <div className={styleApi.searchDiv}>
                <Search_products setSort={setSort} setSlice={setSlice} searchItem={searchItem} handleInputChange={handleInputChange} />
            </div>
            <div className={styleApi.btn}>
                {/* burda hansisa problem var start */}
                <Category
                    menuItem={menuItem}
                    filterItems={filterItems}
                    setProducts={setProducts}
                    products={products}
                    cart={cart} />
            </div>
            <div className={styleApi.amazonBoxDiv}>
                {
                    filteredUsers.sort((a, b) =>
                        sort === 'A-Z' ? a.price - b.price :
                            sort === "Z-A" ? b.price - a.price :"")
                        .map((item) => (
                            <>
                                <Cards item={item} handleClik={handleClik} />
                            </>
                        ))
                }
            </div>

        </>
    )
}
