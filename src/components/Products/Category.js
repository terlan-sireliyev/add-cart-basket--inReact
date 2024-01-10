import React from 'react'
import categoryStyle from './style/category.module.css'
export default function Category({ cateName, filterItems, menuItem, setProducts, products }) {
    return (
        <>
            <div>

                <div className={categoryStyle.boxBtn} >
                    <button
                        onClick={() => setProducts(products)}
                        className={categoryStyle.cateBtn}
                    >
                        All
                    </button>
                    {
                        menuItem.map((val, index) => (
                            <button
                                key={index}
                                className={categoryStyle.cateBtn}
                                onClick={() => filterItems(val)}>{val}</button>
                        ))
                    }

                </div>
            </div>
        </>
    )
}
