import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";
import ShippingBanner from "./components/Footer/ShippingBanner/ShippingBanner";
import Services from "./components/Footer/Services/Services";
import BottomSection from "./components/Footer/BottomSection/BottomSection";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];
const wishlistStorage = JSON.parse(localStorage.getItem("saveWishCache")) || [];
const userCacheStorage = JSON.parse(localStorage.getItem("userCache")) || {};

const notifyToast = (message, error = false) => {
	if (error) return toast.error(message);
	toast.success(message);
};

function App() {
	const [shoppingCart, setShoppingCart] = useState(initialStorage);
	const [wishlistCart, setWishlistCart] = useState(wishlistStorage);
	const [userCache, setUserCache] = useState(userCacheStorage);
const paymentRedirection = useLocation();
console.log(paymentRedirection);


	useEffect(() => {
		localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
	}, [shoppingCart]);

	useEffect(() => {
		localStorage.setItem("saveWishCache", JSON.stringify(wishlistCart));
	}, [wishlistCart]);

	useEffect(() => {
		localStorage.setItem("userCache", JSON.stringify(userCache));
	}, [userCache]);

	useEffect(() => {
if(paymentRedirection.pathname === "/cancel"){
	notifyToast("Payment process Cancel!")
} else if (paymentRedirection.pathname === "/success"){
	notifyToast("Payment process Sucess!")
}
	},[paymentRedirection.pathname]);

	return (
		<div className='main__app'>
			<Navbar
				shoppingCart={shoppingCart}
				setShoppingCart={setShoppingCart}
				wishlistCart={wishlistCart}
				setWishlistCart={setWishlistCart}
				userCache={userCache}
				setUserCache={setUserCache}
				notifyToast={notifyToast}
			/>
			<Catalog
				shoppingCart={shoppingCart}
				setShoppingCart={setShoppingCart}
				wishlistCart={wishlistCart}
				setWishlistCart={setWishlistCart}
				notifyToast={notifyToast}
			/>
			<ShippingBanner />
			<Services />
			<BottomSection />
			<Toaster position='top-left' reverseOrder={false} />
		</div>
	);
}

export default App;
