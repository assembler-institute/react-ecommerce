import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";
import ShippingBanner from "./components/Footer/ShippingBanner/ShippingBanner";
import Services from "./components/Footer/Services/Services"
import BottomSection from "./components/Footer/BottomSection/BottomSection";

import "./App.css";

const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];

function App() {
	const [shoppingCart, setShoppingCart] = useState(initialStorage);

	useEffect(() => {
		localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
	}, [shoppingCart]);

	return (
		<div className='main__app'>
			<Navbar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
			<Catalog shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <ShippingBanner />
      <Services />
			<BottomSection />
		</div>
	);
}

export default App;
