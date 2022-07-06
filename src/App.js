import "./App.css";
import { useState } from "react";
import Product from "./components/Product/Product.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { products } from "./data/products";

function App() {
  const [buyShoppingCart, setBuyShoppingCart] = useState([]);

  console.log(products);
  return (
    <>
      <div className="main__app">
        <div className="main__products">
          <h1>Bruce Lee!</h1>
          <div className="products_list">
            {products.map((item, index) => {
              return (
                <Product
                  key={index}
                  id={index}
                  title={item.title}
                  valoration={item.valoration}
                  amount={item.amount}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  cart={buyShoppingCart}
                  setCart={setBuyShoppingCart}
                />
              );
            })}
          </div>
        </div>
        <ShoppingCart cart={buyShoppingCart} setCart={setBuyShoppingCart} />
      </div>
    </>
  );
}

export default App;
