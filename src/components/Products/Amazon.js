import { useEffect, useState } from 'react';
import Cards from './Cards'
import styleApi from './style/Api.module.css'
import Category from './Category';
import Search_products from './Search_products'
import Products from './Products';

export default function Amazon({ handleClik }) {
    const [products, setProducts] = useState([]);

    async function fetchData() {
        const res = await ((await fetch('https://fakestoreapi.com/products')).json())
        setProducts(res);
    }
    useEffect(() => {
        async function dataFetch() {
            await fetchData()
        }
        dataFetch()

    }, []);

    const menuItem = [...new Set(products.map((val) => val.category))]

    const filterItems = (val) => {
        const filter = products.filter((itemFil) => {
            return itemFil.category === val
        });
        setProducts(filter)

    }
 
    return (
        <>
            <div className={styleApi.searchDiv}>
                <Search_products />
            </div>
            <div className={styleApi.btn}>
                {
                    menuItem.map((cateName, index) => (
                        <Category
                            key={index}
                            cateName={cateName}
                            filterItems={filterItems} />
                    ))
                }
            </div>
            <div className={styleApi.amazonBoxDiv}>
                {
                    products.map((item) => (
                        <>
                            <Cards item={item} handleClik={handleClik} key={item} />
                            {/* <Products itemNav={item} /> */}
                        </>
                    ))
                }
            </div>

        </>
    )
}
