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
