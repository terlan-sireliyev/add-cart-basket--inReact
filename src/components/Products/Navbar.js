import React from 'react'
import styleNavbar from './style/navbar.module.css'
export default function Navbar({ cart, size, setShow }) {
    // let p = []
    // let f = []
    const closeCard = () => {
        setShow(false)
        if (!setShow(false)) {
           return cart.length = 0
        } else {
            return size
        }
    }
    return (
        <div>
            <div className={styleNavbar.navBox} >
                <div className={styleNavbar.wrapper}>
                    <p onClick={() => setShow(true)} className={styleNavbar.cardText}>My_Card</p>
                    <div className={styleNavbar.nav_div} onClick={() => closeCard()}>
                        <i className={`${'fa fa-cart-plus'} ${styleNavbar.cartplus}`} aria-hidden="true" ></i>
                        <span className={styleNavbar.count}>{size}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
