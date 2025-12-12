import Style from "./NewProductCard.module.css"

export default function NewProductCard({ image, alt, desc, title, price, oldPrice, path }) {
    let priceOld = false
    return (
        <section className={Style.card}>
            <aside className={Style.left}>
                <div className={Style.newCont}>
                    <h3 className={Style.newHead}>NEW</h3>
                </div>
                <img src={`${path}${image}`} alt={alt} className={Style.img}/>
            </aside>

            <aside className={Style.right}>
                <h2 className={Style.title}>{title}</h2>
                <p className={Style.desc}>{desc}</p>
                <div className={Style.contBtn}>
                     <p className={`${Style.price} ${oldPrice !== null ? Style.priceRed : ""}`}>
        {price}$
        {/* TODO: Fix this crap ^ */}
    </p>
                    {oldPrice !== null && <p className={Style.oldPrice}>{oldPrice}$</p>}
                    <button className={Style.btn}>Add to cart</button>
                </div>
            </aside>
        </section>
    )
}
