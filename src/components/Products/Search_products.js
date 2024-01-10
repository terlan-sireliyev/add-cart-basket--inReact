import React, { useState } from 'react'
import styleSearch from './style/searchInp.module.css'
export default function Search_products({ onChange, setSort, setSlice, products, setProducts, searchItem, handleInputChange }) {

    return (
        <digit
            <div className={styleSearch.searchInp}>
                <div className={styleSearch.inputDiv}>
                    <input
                        type="text"
                        value={searchItem}
                        onChange={handleInputChange}
                        placeholder='Type to search'
                    />
                </div>
                <div className={styleSearch.selectDiv}>
                    <select class='form-control ' onChange={(e) => setSort(e.target.value)}>
                        <option value="">Sorting</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>

                    <select class='form-control ' onChange={(e) => setSlice(e.target.value)}>
                        <option value="">Slice</option>
                        <option value="five">5</option>
                        <option value="ten">10</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
