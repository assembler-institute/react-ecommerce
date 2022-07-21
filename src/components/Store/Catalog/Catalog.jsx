import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Catalog.css";


const Catalog = ({
	shoppingCart,
	setShoppingCart,
	wishlistCart,
	setWishlistCart,
}) => {
	const [products, setSaveProducts] = useState([]);
	const url = "http://localhost:3001/products";
	useEffect(() => {
		try {
			const fetchProducts = async () => {
				const response = await fetch(url);
				const data = await response.json();
				setSaveProducts(data);
			};
			fetchProducts();
		} catch (error) {
			console.log(error);
		}
	}, [url]);
	return (
		<div className='catalog__container'>
			{products.map(({ id, title, price, image }) => {
				return (
					<Product
						key={id}
						id={id}
						title={title}
						price={price}
						image={image}
						shoppingCart={shoppingCart}
						setShoppingCart={setShoppingCart}
						wishlistCart={wishlistCart}
						setWishlistCart={setWishlistCart}
					/>
				);
			})}
		</div>
	);
};

export default Catalog;
