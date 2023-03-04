import { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	// How to handle the situation when initial value's type is different from future value's type
	const [user, setUser] = useState<AuthUser | null>(null);

	// In a case, where we know that `AuthUser` will be available as soon as component mounts and it will not be null then there is another solution for this
	// const [user, setUser] = useState<AuthUser>({} as AuthUser);
	// Here we are lieing  to the TypeScript compiler that `{}` is of type AuthUser

	const handleLogin = () => {
		setUser({
			name: "Saleh",
			email: "saleh@example.dev",
		});
	};
	const handleLogout = () => {
		setUser(null);
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			{/* We have to use optional chaining because `user` can be `null` */}
			<div>User name is {user?.name}</div>
			<div>User email is {user?.email}</div>
		</div>
	);
};

export default User;
