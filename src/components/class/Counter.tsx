import { Component } from "react";

type CounterProps = {
	message: string;
};

type CounterState = {
	count: number;
};

// can be passed only one or both or none of them based on the needs
// if you don't have props then <{}, CounterProps>
// if you don't have state then <CounterProps>
// order matters; props first, state second
export class Counter extends Component<CounterProps, CounterState> {
	state = {
		count: 0,
	};

	handleClick = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Increment</button>
				{this.props.message} {this.state.count}
			</div>
		);
	}
}
