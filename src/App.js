import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";
import ShippingBanner from "./components/Footer/ShippingBanner/ShippingBanner";
import Services from "./components/Footer/Services/Services";
import BottomSection from "./components/Footer/BottomSection/BottomSection";

import "./App.css";

const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];

//* The App function is the main component of the application. It holds the state of the shopping cart
//* and wishlist cart, and passes them down to the Navbar and Catalog components.
//* @returns The return is the JSX that will be rendered to the DOM.

function App() {
	const [shoppingCart, setShoppingCart] = useState(initialStorage);
	const [wishlistCart, setWishlistCart] = useState([]);

	useEffect(() => {
		localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
	}, [shoppingCart]);

	return (
		<div className='main__app'>
			<Navbar
				shoppingCart={shoppingCart}
				setShoppingCart={setShoppingCart}
				wishlistCart={wishlistCart}
				setWishlistCart={setWishlistCart}
			/>
			<Catalog
				shoppingCart={shoppingCart}
				setShoppingCart={setShoppingCart}
				wishlistCart={wishlistCart}
				setWishlistCart={setWishlistCart}
			/>
			<ShippingBanner />
			<Services />
			<BottomSection />
		</div>
	);
}

export default App;
