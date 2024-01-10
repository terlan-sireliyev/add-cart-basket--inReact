import React, { useState } from 'react'
import Amazon from './Amazon'
import Navbar from './Navbar'
import CartBasket from './CartBasket'
import styleProduct from './style/product.module.css'
export default function Products() {
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([]);//add etdikde setCart()-a dusur

    const handleClik = (item) => {
        if (cart.indexOf(item) !== -1) {
            alert('artiq elave olunub')
            return;
        }
        setCart([...cart, item])
    }
    return (
        <div className={styleProduct.product_div}>
            <Navbar cart={cart} size={cart.length} setShow={setShow} />
            {
                !show ? <Amazon cart={cart} setCart={setCart} handleClik={handleClik} /> :
                        <CartBasket size={cart.length} show={show} setShow={setShow} cart={cart} setCart={setCart} />
            }
        </div>
    )
}
