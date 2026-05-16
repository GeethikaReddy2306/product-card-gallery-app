export default function ProductList({img,name,rating,price}) {
  return (
    <div id="card">
        <img src={img}/>
         
        <h1>{name}</h1>
        <a>&#8377;{price}</a><br/>
        <a>{rating}</a>
        <button>Add to Cart</button>
     </div>
  )
}
