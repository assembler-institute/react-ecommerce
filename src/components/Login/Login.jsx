//* Component Login to move user with "Link component from "react-router-dom,library"
//? We use Link component from "react-router-dom", Library to move USERS to one specific point of the project.

import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
	return (
		<div>
			This is the Login
			<Link to='/'>Home</Link>
			<Link to='/'>New Home</Link>
		</div>
	);
};

export default Login;
