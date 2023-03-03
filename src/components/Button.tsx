type ButtonProps = {
	// handleClick: () => void; // when function accepts no arguments and also returns nothing
	handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; // when we pass `event` as argument
};

const Button = (props: ButtonProps) => {
	return (
		<button onClick={(event) => props.handleClick(event, 1)}>Click</button>
	);
};

export default Button;
