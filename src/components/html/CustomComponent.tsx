// let's say that this component needs exact same props as Greet component
// We can export props from Greet component's file and then import in file and use that
// but let's assume that the Greet component comes from some third party library and we don't have access to it
// So, then how do we achieve that, let's see

import Greet from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
	return <div>{props.name}</div>;
};

export default CustomComponent;
