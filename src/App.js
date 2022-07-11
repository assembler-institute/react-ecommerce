import { useEffect, useState } from "react";
import { products } from "./data/products";
import Product from "./components/Product/Product";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Navbar from "./components/Navbar/Navbar.jsx"

import { Text } from "@nextui-org/react";
import "./App.css";

const initialShoppingCart =
	JSON.parse(localStorage.getItem("shoppingCart")) || [];
function App() {
	const [buyShoppingCart, setBuyShoppingCart] = useState(initialShoppingCart);

	useEffect(() => {
		localStorage.setItem("shoppingCart", JSON.stringify(buyShoppingCart));
	}, [buyShoppingCart]);

	return (
		<div className='main__app App'>
			<div className='main__products'>
				<Text
					h1
					size={60}
					css={{
						textGradient: "45deg, $yellow600 -20%, #E79003 100%",
						padding: "4rem",
					}}
					weight='bold'
				>
					Bruce Lee
				</Text>
				<div className='products_list'>
					{products.map((item, index) => {
						return (
							<Product
								key={index}
								id={index}
								title={item.title}
								description={item.description}
								valoration={item.valoration}
								price={item.price}
								image={item.image}
								cart={buyShoppingCart}
								setCart={setBuyShoppingCart}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<h1>Shopping Cart</h1>
				<ShoppingCart cart={buyShoppingCart} setCart={setBuyShoppingCart} />
			</div>
		</div>
	);
}

export default App;
