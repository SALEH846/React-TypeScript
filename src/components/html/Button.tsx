type ButtonProps = {
	variant: "primary" | "secondary";
	children: string; // we are restricting children to only be text
} & Omit<React.ComponentProps<"button">, "children">; // Now, we can also pass all the attributes of native HTML button tag

const Button = ({ variant, children, ...rest }: ButtonProps) => {
	return (
		<button className={`class-with-${variant}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
