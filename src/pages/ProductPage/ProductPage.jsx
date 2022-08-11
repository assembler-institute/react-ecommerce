import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
	const [productPage, setProductPage] = useState({});
	const url = "http://localhost:3001/products";
	const { id: productId } = useParams();

	/* Fetching the data from the API and filtering it by the productId. */
	useEffect(() => {
		try {
			const fetchProducts = async () => {
				const response = await fetch(url);
				const data = await response.json();
				const results = data.filter((item) => item.id === Number(productId));
				setProductPage(...results);
			};
			fetchProducts();
		} catch (error) {
			console.log(error);
		}
	}, [productId]);

	return (
		<>
			<figure>
				<img src={productPage.image} alt='' />
				<figcaption>{productPage.title}</figcaption>
				<figcaption>{productPage.description}</figcaption>
				<figcaption>{productPage.category}</figcaption>
			</figure>
			<Link to={"/"}>
				<button>Go Back!</button>
			</Link>
		</>
	);
};

export default ProductPage;
