import Navbar from "./components/Navbar"
import Header from "./components/Header"
import products from "./products"
import ProductList from "./components/ProductList"
import "./App.css"
export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
        <div id="products-container">
      {
        products.map((card)=>(
        
          <ProductList price={card. price} rating={card.rating} name={card.name} img={card.image}/>
     

        ))
      }
           </div>
    </div>
  )
}
