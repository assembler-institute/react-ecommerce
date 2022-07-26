import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

import "./ShoppingCart.css";

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
	const [totalItemPrice, setTotalItemPrice] = useState(0);

	useEffect(() => {
		let sumTotalItemPrice = 0;

		shoppingCart.forEach((item) => {
			sumTotalItemPrice += item.itemPrice * item.itemQuantity;
		});

		setTotalItemPrice(sumTotalItemPrice);
	}, [shoppingCart]);

	const handleCheckout = () => {
		const items = shoppingCart.map((item) => {
			return item;
		});

		fetch("http://localhost:4242/create-checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ shoppingCart }),
		})
			.then((res) => {
				if (res.ok) return res.json();
				return res.json().then((json) => Promise.reject(json));
			})
			.then(({ url }) => {
				window.location = url;
			})
			.catch((e) => {
				console.error(e);
			});
	};

	return (
		<div className='main__cart'>
			<h3>Shopping Cart</h3>
			<ul className='cart__list'>
				{shoppingCart.length > 0 ? (
					shoppingCart.map(
						({ itemId, itemTitle, itemPrice, itemImage, itemQuantity }) => {
							return (
								<CartItem
									key={itemId}
									itemId={itemId}
									itemTitle={itemTitle}
									itemPrice={itemPrice}
									itemImage={itemImage}
									itemQuantity={itemQuantity}
									shoppingCart={shoppingCart}
									setShoppingCart={setShoppingCart}
								/>
							);
						},
					)
				) : (
					<h1>Empty Cart</h1>
				)}
			</ul>
			<div className='cart__bottom'>
				<p className='cart__total'>Total:</p>
				<p className='cart__total_price'>€{totalItemPrice}</p>
			</div>
			<Button bordered color='warning' auto onClick={handleCheckout}>
				Checkout
			</Button>
		</div>
	);
};

export default ShoppingCart;
