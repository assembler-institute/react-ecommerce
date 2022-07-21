import "./ShippingBanner.css";
import { FaShoppingBag } from "react-icons/fa";

//* It returns a div with two spans inside. The first span contains a FontAwesome icon, the second span
//* contains a string.
//* @returns A div with two spans inside.

const ShippingBanner = () => {
	return (
		<div className='freeShipping__container'>
			<span>
				{" "}
				<FaShoppingBag size='6rem' color='black' />{" "}
			</span>
			<span>FREE SHIPPING ON ANY ORDER ABOVE 50€</span>
		</div>
	);
};

export default ShippingBanner;
