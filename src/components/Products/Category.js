import React from 'react'
import categoryStyle from './style/category.module.css'
export default function Category({cateName ,key,filterItems}) {
    return (
       <>
        <div>
            
            <div className="boxBtn" >
                <button
                onClick={() => filterItems(cateName)}
                key={key}
                className={categoryStyle.cateBtn}
                >
                    {cateName}
                </button>
            </div>
        </div>
       </>
    )
}
