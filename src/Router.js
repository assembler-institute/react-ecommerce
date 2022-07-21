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
				<Route path='./components/Login/Login.jsx' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
