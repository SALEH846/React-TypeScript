// A component which receives `as` prop is called polymorphic component

type TextOwnProps<E extends React.ElementType> = {
	size?: "sm" | "md" | "lg";
	color?: "primary" | "secondary";
	children: React.ReactNode;
	as?: E;
};

// Also include the native attributes of HTML elements
// Remove all the native attributes of HTML element whose name collide with the custom props
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = "div">({
	size,
	color,
	children,
	as,
}: TextProps<E>) => {
	const Component = as || "div";
	return (
		<Component className={`class-with-${size}-${color}`}>{children}</Component>
	);
};

export default Text;
