import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";
import ShippingBanner from "./components/Footer/ShippingBanner/ShippingBanner";
import Services from "./components/Footer/Services/Services";
import BottomSection from "./components/Footer/BottomSection/BottomSection";
import { UserDataContext } from "./context/UserDataContext";
import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];
const wishlistStorage = JSON.parse(localStorage.getItem("saveWishCache")) || [];

const notifyToast = (message, error = false) => {
	if (error) return toast.error(message);
	toast.success(message);
};

function App() {
	const [shoppingCart, setShoppingCart] = useState(initialStorage);
	const [wishlistCart, setWishlistCart] = useState(wishlistStorage);
	const { userCache } = useContext(UserDataContext);
	const paymentRedirection = useLocation();
	const navigator = useNavigate();

	useEffect(() => {
		localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
	}, [shoppingCart]);

	useEffect(() => {
		localStorage.setItem("saveWishCache", JSON.stringify(wishlistCart));
	}, [wishlistCart]);

	useEffect(() => {
		if (paymentRedirection.pathname === "/cancel") {
			navigator("/");
			notifyToast("Process Cancelled!");
		} else if (paymentRedirection.pathname === "/success") {
			navigator("/");
			notifyToast(
				`${userCache.username} congratulations you payment process is done!`,
			);
			setShoppingCart([]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='main__app'>
			<Navbar
				shoppingCart={shoppingCart}
				setShoppingCart={setShoppingCart}
				wishlistCart={wishlistCart}
				setWishlistCart={setWishlistCart}
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
