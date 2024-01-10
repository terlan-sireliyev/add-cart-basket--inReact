import styleApi from './style/Api.module.css'
//bura amazon.js - den api leri cekib getiririk.
export default function Cards({ item, handleClik }) {
    const { image, price, title ,id} = item;
    return (
        <div className={styleApi.cardBoxDiv}>
            <div className={styleApi.boxProducts}>
                <div className={styleApi.imgDiv}><img src={image} alt={title} /></div>
                <div className={styleApi.pro}>
                    <div className={styleApi.boxPriceName}>
                        <h3 className={styleApi.proName}>Name: {title}</h3>
                        <p>Price: {price}</p>
                    </div>
                    <div className={styleApi.btnDiv}>
                        <button onClick={() => handleClik(item)} className={styleApi.addCard}>Add Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
