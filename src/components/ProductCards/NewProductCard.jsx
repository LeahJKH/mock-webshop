import Style from "./NewProductCard.module.css"

export default function NewProductCard({ image, alt, desc, title, path }) {
    return (
        <section className={Style.card}>
            <aside className={Style.left}>
                <div className={Style.newCont}>
                    <h2 className={Style.newHead}>NEW</h2>
                </div>
                <img src={`${path}${image}`} alt={alt} className={Style.img}/>
            </aside>

            <aside className={Style.right}>
                <h2 className={Style.title}>{title}</h2>
                <p className={Style.desc}>{desc}</p>
                <button className={Style.btn}>Add to cart</button>
            </aside>
        </section>
    )
}
