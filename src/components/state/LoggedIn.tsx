import { useState } from "react";

const LoggedIn = () => {
	// TypeScript will infer that the type of `isLoggedIn` state variable is boolean
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		// setIsLoggedIn(0); // TypeScript will not let us do that as `0` is of type `number`
		setIsLoggedIn(true);
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User is {isLoggedIn ? "logged in" : "logged out"}</div>

			{/* TypeScript will not let us do that */}
			{/* <div>User is {isLoggedIn.length ? "logged in" : "logged out"}</div> */}
		</div>
	);
};

export default LoggedIn;
