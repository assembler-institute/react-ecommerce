//* Router is the Component we use to display the "Route from "react-router-dom", Library ".
//? The component Routes of the "react-router-dom" Library, Is used to move forward the position we want.
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";

//* "The Router function returns a BrowserRouter component that contains two Routes components, each of
//* which contains a Route component."

//* The BrowserRouter component is the parent component of the Routes components. The Routes components
//* are siblings. The Route components are children of the Routes components.

//* The BrowserRouter component is the parent component of the Routes components. The Routes components
//* are siblings. The Route components are children of the Routes components.

//* The BrowserRouter component is the parent component of the Routes components. The Routes components
//* are siblings. The Route components are children of the Routes components.

//* The BrowserRouter component is the parent component of the Routes components. The Routes components
//* are siblings. The Route components are children of the Routes components.

//* The BrowserRouter component is the parent component of the Routes components. The Routes
//* @returns A React Router component that is a BrowserRouter.

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
			</Routes>
			<Routes>
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
