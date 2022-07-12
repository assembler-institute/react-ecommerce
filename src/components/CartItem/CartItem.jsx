import { useState } from "react";
import { Button } from "@nextui-org/react";
import "./CartItem.css";

const CartItem = ( {id, title, price, image, cart, setCart, quantity}) => {
	const [amount, setAmount] = useState(quantity);

	const handleAdd = () => {
		setAmount(amount + 1);

		cart.forEach((item) => {
			if (item.cartId === id) {
				item.amount = amount + 1;
			}
		});

		setCart([...cart]);
	};

	const handleMinus = () => {
		if (amount === 1) return;
		setAmount(amount - 1);

		cart.forEach((item) => {
			if (item.cartId === id) {
				item.amount = amount - 1;
			}
		});

		setCart([...cart]);
	};

	const handleRemove = () => {
		const newCart = cart.filter((item) => item.cartId !== id);
		setCart(newCart);
	};

	return (
		<div className='cart__item'>
			<img className='cart__item_image' src={image} alt='' />
			<div>
				<p className='cart__item_title'>{title}</p>
				<p className='cart__item_price'>{price}</p>
				<div className='cart__item_bottom'>
					<Button light color='warning' auto onClick={handleMinus}>
						-
					</Button>
					<p>{amount}</p>
					<Button light color='warning' auto onClick={handleAdd}>
						+
					</Button>
					<Button light color='warning' auto onClick={handleRemove}>
						Remove
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
