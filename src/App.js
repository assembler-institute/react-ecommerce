import './App.css';
import Product from './components/Product.jsx';
import {products} from './data/products';


function App() {
console.log(products);
  return (
      
    <>
      <h1>Bruce Lee!</h1>
      {products.map((item, index)=>{
        return <Product key={index} title={item.title} valoration={item.valoration} amount={item.amount} price={item.price} description={item.description} image={item.image}/>
      })}
      
    </>
  );
}

export default App;