//* Component Login to move user with "Link component from "react-router-dom,library"
//? We use Link component from "react-router-dom", Library to move USERS to one specific point of the project.

import React, { useState } from "react";
import { LoginVerification } from "../utils/utils";
import { useNavigate } from "react-router";

export default function LoginPlain() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigator = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		setIsLoggedIn(false);
		setError("");
    
  

		try {
			await LoginVerification({ username, password });
			// await console.log(LoginVerification(username, password));
			setIsLoggedIn(true);
			setUsername("");
			setPassword("");
			setError("");
			navigator("/");
	
		} catch (error) {
			// do no thing for now
			setError("Incorrect username or password!");
		}

		setIsLoading(false);
	};

	return (
		<div className='Login'>
			<div className='Login-container'>
				{isLoggedIn ? (
					<>
						<h1> Hello {username}!</h1>{" "}
						<button
							onClick={() => {
								setIsLoggedIn(false);
							}}
						>
							Log Out
						</button>
					</>
				) : (
					<form className='form' onSubmit={onSubmit}>
						{error && <p className='error'>{error}</p>}
						<p>Please Login!</p>

						<input
							type='text'
							placeholder='username'
							autoComplete='new-username'
							value={username}
							onChange={(e) => setUsername(e.currentTarget.value)}
						/>
						<input
							type='password'
							placeholder='password'
							autoComplete='new-password'
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>

						<button className='submit' type='submit' disabled={isLoading}>
							{isLoading ? "Logging in..." : "Login In"}
						</button>
					</form>
				)}
			</div>
		</div>
	);
}

// import "./Login.css";
// import { Link } from "react-router-dom";
// const Login = () => {
// 	return (
// 		<div>
// 			This is the Login
// 			<Link to='/'>Home</Link>
// 			<Link to='/'>New Home</Link>
// 		</div>
// 	);
// };

// export default Login;
