//* Router is the Component we use to display the "Route from "react-router-dom", Library ".
//? The component Routes of the "react-router-dom" Library, Is used to move forward the position we want.

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
			</Routes>
			<Routes>
				<Route path='/Login' elemnt={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
