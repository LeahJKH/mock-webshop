import NewProductCard from "../../components/ProductCards/NewProductCard";
import newProd from "../../json/productsNew.json"
import "./home.css"
export default function Home() {
  const newPath = "./images"; 
  return (
    <main>
      <section className="fullContNew">
        <h2 className="headingNew">NEW PRODUCTS!</h2>
        <div className="NewProducts">
          {newProd.map((e) => (
            <NewProductCard 
              key={e.title} 
              image={e.image}
              alt={e.alt}
              desc={e.desc}
              title={e.title}
              price={e.price}
              path={newPath} 
            />
          ))}
        </div>
      </section>
    </main>
  );
}
