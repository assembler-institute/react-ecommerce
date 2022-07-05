import './App.css';
import Product from './components/Product.jsx';
import {products} from './data/products';


function App() {
console.log(products);
  return (
      
    <>
      <h1>Bruce Lee!</h1>
      {products.map((item, index)=>{
        return <Product key={index}/>
      })}
      
    </>
  );
}

export default App;