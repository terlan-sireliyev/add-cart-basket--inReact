import React from 'react'
import styleSearch from './style/searchInp.module.css'
export default function Search_products() {
    return (
        <div>
            <div className={styleSearch.searchInp}>
                <input type="text" placeholder='Axtar' />
            </div>
        </div>
    )
}
