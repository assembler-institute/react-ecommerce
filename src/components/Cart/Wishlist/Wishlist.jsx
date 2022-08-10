import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import "./Wishlist.css";

const Wishlist = ({
	shoppingCart,
	setShoppingCart,
	dispatch,
	wishListCart,
}) => {
	const [totalItemWishlist, setTotalItemWishlist] = useState(0);

	useEffect(() => {
		let totalOfWhislistArrayItems = wishListCart.length;
		setTotalItemWishlist(totalOfWhislistArrayItems);
	}, [wishListCart]);

	return (
		<div className='main__cart'>
			<h3>Whislist Cart</h3>
			<ul className='cart__list'>
				{wishListCart.length > 0 ? (
					wishListCart.map(
						({ itemId, itemTitle, itemPrice, itemImage, itemQuantity }) => {
							return (
								<CartItem
									key={itemId}
									itemId={itemId}
									itemTitle={itemTitle}
									itemPrice={itemPrice}
									itemImage={itemImage}
									itemQuantity={itemQuantity}
									wishListCart={wishListCart}
									dispatch={dispatch}
									shoppingCart={shoppingCart}
									setShoppingCart={setShoppingCart}
									wish={true}
								/>
							);
						},
					)
				) : (
					<h1>No Love!</h1>
				)}
			</ul>
			<div className='cart__bottom'>
				<Tooltip
					placement='bottom'
					content='Items on your Wishlist!'
					color='warning'
				>
					<Button flat auto color='warning'>
						{totalItemWishlist}
					</Button>
				</Tooltip>
			</div>
		</div>
	);
};
export default Wishlist;
