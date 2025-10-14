import NewProductCard from "../../components/ProductCards/NewProductCard";
import newProd from "../../json/productsNew.json"

export default function Home() {
  const newPath = "./images"; 
  return (
    <main>
      <section>
        <div>
          {newProd.map((e) => (
            <NewProductCard 
              key={e.title} 
              image={e.image}
              alt={e.alt}
              desc={e.desc}
              title={e.title}
              path={newPath} 
            />
          ))}
        </div>
      </section>
    </main>
  );
}
