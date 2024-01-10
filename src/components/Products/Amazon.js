import { useEffect, useState } from 'react';
import Cards from './Cards'
import styleApi from './style/Api.module.css'
import Category from './Category';
import Search_products from './Search_products'

export default function Amazon({ cart, handleClik }) {
    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [sort, setSort] = useState('')
    const [slice, setSlice] = useState('')
    const [sortBy, setSortBy] = useState('All')

    async function fetchData() {
        const res = await ((await fetch('https://fakestoreapi.com/products')).json())
        setProducts(res);
        setFilteredProduct(res)
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
            setFilteredProduct(filteredItems);
        } else {
            setFilteredProduct(products)
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
                    [...filteredProduct].sort((a, b) => {
                        if (sort === "A-Z") {
                            if (a.price < b.price)
                                return -1;
                        }
                        if (sort === "Z-A") {
                            if (a.price > b.price)
                                return -1;
                        }
                    }).map((item) => (
                        <>
                            <Cards item={item} handleClik={handleClik} />
                        </>
                    ))
                }
            </div>

        </>
    )
}
