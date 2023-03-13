import { Login } from "./LogIn";
import { ProfileProps } from "./Profile";

type PrivateProps = {
	isLoggedIn: boolean;
	component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
	if (isLoggedIn) {
		return <Component name="Saleh" />;
	} else {
		return <Login />;
	}
};
