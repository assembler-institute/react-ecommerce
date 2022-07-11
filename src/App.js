import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar.jsx"

import "./App.css";

const initialShoppingCart =
	JSON.parse(localStorage.getItem("shoppingCart")) || [];



function App() {
return (
	<div className="main__app">
		<Navbar />
	</div>
	);
};

export default App;
