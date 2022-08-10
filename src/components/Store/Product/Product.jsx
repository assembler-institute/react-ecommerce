import { useState, useEffect } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ACTIONS } from "../../../reducers/wishlistReducer";
import "./Product.css";

const Product = ({
	id,
	title,
	price,
	image,
	valoration,
	description,
	shoppingCart,
	setShoppingCart,
	dispatch,
	wishlistCart,
	menuState,
	setMenu,
	notifyToast,
}) => {
	const [itemAdded, setItemAdded] = useState(false);
	const [wishlistAdded, setWishlistAdded] = useState(false);

	const addToCart = () => {
		setShoppingCart([
			...shoppingCart,
			{
				itemId: id,
				itemTitle: title,
				itemPrice: price,
				itemImage: image,
				itemQuantity: 1,
			},
		]);
		notifyToast(`${title} Added to the Shopping Cart!`);
	};

	const addTowishlistCart = () => {
		dispatch({
			type: ACTIONS.ADD_TO_WISH_LIST,
			payload: {
				itemId: id,
				itemTitle: title,
				itemPrice: price,
				itemImage: image,
				itemQuantity: 1,
			},
		});
		notifyToast(`${title} Added to the Wishlist!`);
	};

	useEffect(() => {
		const result = wishlistCart.some((item) => {
			if (item.itemId === id) {
				return true;
			}
			return false;
		});
		result && setWishlistAdded(true);
		!result && setWishlistAdded(false);
	}, [id, wishlistCart]);

	useEffect(() => {
		const resutl = shoppingCart.some((product) => {
			if (product.itemId === id) {
				return true;
			}
			return false;
		});
		resutl && setItemAdded(true);
		!resutl && setItemAdded(false);
	}, [id, shoppingCart]);

	return (
		<Card css={{ w: "15%", h: "330px" }}>
			<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
				<Col>
					<Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
						New
					</Text>
					<Button
						color='error'
						light
						onClick={addTowishlistCart}
						disabled={wishlistAdded}
					>
						{wishlistAdded ? (
							<AiFillHeart size='5rem' />
						) : (
							<AiOutlineHeart size='5rem' />
						)}
					</Button>
					<Text h3 color='#CE7500' size={20} weight='bold'>
						{title}
					</Text>
				</Col>
			</Card.Header>
			<Card.Body css={{ p: 0 }}>
				<Card.Image
					src={image}
					width='100%'
					height='100%'
					objectFit='cover'
					alt='Card example background'
				/>
			</Card.Body>
			<Card.Footer
				isBlurred
				css={{
					position: "absolute",
					bgBlur: "#ffffff66",
					borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					bottom: 0,
					zIndex: 1,
				}}
			>
				<Row>
					<Col>
						<Text color='#000' size={12}>
							Available soon.
						</Text>
						<Text color='#000' size={20}>
							€ {price}
						</Text>
					</Col>
					<Col>
						<Row justify='flex-end'>
							<Button color='warning' auto ghost disabled={itemAdded}>
								<Text
									css={{ color: "black" }}
									size={12}
									weight='bold'
									transform='uppercase'
									onClick={addToCart}
								>
									{itemAdded ? "Added" : "Shop Now"}
								</Text>
							</Button>
						</Row>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default Product;
