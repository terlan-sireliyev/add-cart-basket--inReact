import React, { useEffect, useState } from 'react'
import styleBasket from './style/cartBasket.module.css'
export default function CartBasket({ cart, setCart, show, setShow, size }) {
    const [price, setPrice] = useState(0);
    const [countCard, setCountCard] = useState(cart.map(item => ({ ...item, quantity: 1 })));
    const handleCountProductPilus = (id) => {
        setCountCard(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity +1}
                }
                return item;
            });
        });
    }

    const handleCountProductMinus = (id) => {
        setCountCard(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity === 1 ? item.quantity :item.quantity-1 }
                }
                return item;
            });
        });
    }
    const closeBasket = () => {
        setShow(false)
        if (!setShow(false)) {
            return cart.length = 0
        } else {
            return size
        }
    }
    const deleteBasket = (id) => {
        const deletbasket = cart.filter((item) => item.id !== id);
        setCart([...deletbasket]);
    }

    const handOPrice = () => {
        let priceZero = 0;
        cart.map((item, index) => (
            priceZero += countCard[index].quantity * item.price
        ))
        setPrice(priceZero)
    }
    useEffect(() => {
        handOPrice()
    })
    return (
        <>
            {
                cart.length > 0? <div className={styleBasket.basketContainer}>
                    <div className={styleBasket.closeWindowBasket}>
                        <i onClick={closeBasket} class="fa fa-times" aria-hidden="true"></i>
                    </div>

                    <article className={styleBasket.articl}>
                        {
                            cart.map((item, index) => {
                                return (
                                    <div className={styleBasket.basketBox}>

                                        <div key={item.id} className={styleBasket.wrapper}>

                                            <div className={styleBasket.imgDiv}>
                                                <img src={item.image} alt={item.title} />
                                            </div>

                                            <div className={styleBasket.otherAbout}>
                                                <div className={styleBasket.closeIcon}>
                                                    <i onClick={() => deleteBasket(item.id)} class="fa fa-times" aria-hidden="true"></i>
                                                </div>
                                                <div className={styleBasket.productsAbout}>
                                                    <p className={styleBasket.procutsName}>Məhsulun adı: {item.title}</p>
                                                    <p>Məhsulun qiyməti: {item.price}</p>
                                                    <p className={styleBasket.descriptionClass}>Məhsul haqqında: {item.description}</p>
                                                    <p className={styleBasket.descriptionClass}>Məhsulun Reytinqi: {item.rating.count}</p>
                                                </div>
                                                <div className={styleBasket.countProducts}>
                                                    <button onClick={() => handleCountProductMinus(item.id)}>-</button>
                                                    <button>{countCard[index].quantity}</button>
                                                    <button onClick={() => handleCountProductPilus(item.id)}>+</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div>

                            {/* styleBasket.commonPrice */}
                            <div className={styleBasket.commonPrice}>
                                <p>Item count: <span>{cart.length}</span></p>
                                <p>
                                    Total price: {price}  AZN
                                </p>
                            </div>
                        </div>
                    </article>
                </div> : <h1 style={{textAlign:"Center"}}>Not Order your`s</h1>
            }
        </>
    )
}
