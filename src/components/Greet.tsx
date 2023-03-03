type GreetProps = {
	name: string;
	messageCount?: number; // optional
	isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
	// if `messageCount` is provided, use its value, if not, take 0
	const { messageCount = 0 } = props;

	return (
		<h2>
			{props.isLoggedIn
				? `Welcome ${props.name}! you have ${messageCount} unread messages`
				: "Welcome guest!"}
		</h2>
	);
};

export default Greet;
