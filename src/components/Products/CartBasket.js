import React, { useEffect, useState } from 'react'
import styleBasket from './style/cartBasket.module.css'
export default function CartBasket({ cart, setCart }) {

    const [price, setPrice] = useState(0);
    const [countCard, setCountCard] = useState(1)


    const handleCountProductPilus = () => {
        setCountCard(countCard + 1)
    }

    const handleCountProductMinus = () => {
        setCountCard(countCard - 1)
    }

    const handOPrice = () => {
        let priceZero = 0;
        cart.map((item) => (
            priceZero += countCard * item.price
        ))
        setPrice(priceZero)
    }
    useEffect(() => {
        handOPrice()
    })
    return (
        <div className={styleBasket.basketContainer}>
            <article>
                {
                    cart.map((item) => {
                        return (
                            <div className={styleBasket.basketBox}>
                                <div key={item.id} className={styleBasket.wrapper}>
                                    <div className={styleBasket.imgDiv}>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className={styleBasket.otherAbout}>
                                        <div className={styleBasket.closeIcon}>
                                            <i class="fa fa-times" aria-hidden="true"></i>
                                        </div>
                                        <div className={styleBasket.productsAbout}>
                                            <p className={styleBasket.procutsName}>Məhsulun adı: {item.title}</p>
                                            <p>Məhsulun qiyməti: {item.price}</p>
                                            <p className={styleBasket.descriptionClass}>Məhsul haqqında: {item.description}</p>
                                        </div>
                                        <div className={styleBasket.countProducts}>
                                            <button onClick={() => handleCountProductMinus(item)}>-</button>
                                            <button>{countCard}</button>
                                            <button onClick={() => handleCountProductPilus(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    <div className={styleBasket.commonPrice}>
                        <p>
                            Ümumi qiymət: {price}  AZN
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}
