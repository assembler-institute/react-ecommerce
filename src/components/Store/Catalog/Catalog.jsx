import { useEffect, useState } from "react";

import Product from "../Product/Product";
import "./Catalog.css";

const Catalog = ({
	shoppingCart,
	setShoppingCart,
	dispatch,
	wishlistCart,
	notifyToast,
}) => {
	const [products, setSaveProducts] = useState([]);
	const url = "http://localhost:3001/products";

	/* Fetching data from the API and setting it to the state. */
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
						dispatch={dispatch}
						wishlistCart={wishlistCart}
						notifyToast={notifyToast}
					/>
				);
			})}
		</div>
	);
};

export default Catalog;
