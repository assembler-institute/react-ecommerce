import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/success' element={<App />} />
				<Route path='/cancel' element={<App />} />
			</Routes>
			<Routes>
			<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
