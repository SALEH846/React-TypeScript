// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import Container from "./components/Container";
// import Counter from "./components/state/Counter";
// import LoggedIn from "./components/state/LoggedIn";
// import User from "./components/state/User";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import Box from "./components/context/Box";
// import { UserContextProvider } from "./components/context/UserContext";
// import User from "./components/context/User";
// import DomRef from "./components/ref/DomRef";
// import MutableRef from "./components/ref/MutableRef";
// import { Private } from "./components/auth/Private";
// import { Profile } from "./components/auth/Profile";
// import { Counter } from "./components/class/Counter";
// import { List } from "./components/generics/List";
// import Button from "./components/html/Button";
// import Input from "./components/html/Input";
// import { RandomNumber } from "./components/restriction/RandomNumber";
// import Toast from "./components/templateliterals/Toast";
// import CustomComponent from "./components/html/CustomComponent";
import Text from "./components/polymorphic/Text";
import "./App.css";

function App() {
	// For Person component in step 2
	// const personName = {
	// 	firstName: "Bruce",
	// 	lastName: "Wayne",
	// };

	// For PersonList component in step 2
	// const nameList = [
	// 	{
	// 		firstName: "Bruce",
	// 		lastName: "Wayne",
	// 	},
	// 	{
	// 		firstName: "Clark",
	// 		lastName: "Kent",
	// 	},
	// 	{
	// 		firstName: "Princess",
	// 		lastName: "Diana",
	// 	},
	// ];

	return (
		<div className="App">
			{/* For step 1 of learning */}
			{/* <Greet name="Saleh" messageCount={20} isLoggedIn={false} /> */}

			{/* For step 2 of learning */}
			{/* <Person name={personName} /> */}
			{/* <PersonList names={nameList} /> */}

			{/* For step 3 of learning */}
			{/* <Status status="loading" />
			<Heading>This is Heading</Heading>
			<Oscar>
				<Heading>Oscar goes to Leonardo Decaprio!</Heading>
			</Oscar>
			<Greet name="Saleh" isLoggedIn={true} /> */}

			{/* For step 4 of learning */}
			{/* when function accepts no arguments and also returns nothing */}
			{/* <Button
				handleClick={() => {
					console.log("Button Clicked");
				}}
			/> */}
			{/* when we pass `event` as argument */}
			{/* <Button
				handleClick={(event, id) => {
					console.log("Button Clicked", event, id);
				}}
			/> */}
			{/* <Input value="" handleChange={(event) => console.log(event)} /> */}

			{/* For step 5 of learning */}
			{/* <Container styles={{ border: "1px solid blue", padding: "1rem" }} /> */}

			{/* For step 6 of learning */}
			{/* <LoggedIn />
			<User /> */}

			{/* For step 7 of learning */}
			{/* <Counter /> */}

			{/* For step 8 of learning */}
			{/* <ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<UserContextProvider>
				<User />
			</UserContextProvider> */}

			{/* For step 9 of learning */}
			{/* <DomRef />
			<MutableRef /> */}

			{/* For step 10 of learning */}
			{/* <Counter message="The count value is" /> */}

			{/* For step 11 of learning */}
			{/* <Private isLoggedIn={true} component={Profile} /> */}

			{/* For step 12 of learning */}
			{/* <List
				items={["Batman", "Superman", "Wonder Woman"]}
				onClick={(item) => console.log(item)}
			/>
			<List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
			{/* <List
				items={[
					{
						id: 1,
						first: "Bruce",
						last: "Wayne",
					},
					{
						id: 2,
						first: "Clark",
						last: "Kent",
					},
					{
						id: 3,
						first: "Princess",
						last: "Diana",
					},
				]}
				onClick={(item) => console.log(item)}
			/> */}

			{/* For step 13 of learning */}
			{/* <RandomNumber value={10} isPositive={true} /> */}

			{/* For step 14 of learning */}
			{/* <Toast position="left-center" /> */}

			{/* For step 15 of learning */}
			{/* <Button variant="primary" onClick={() => console.log("Button Clicked")}>
				Primary Button
			</Button>
			<Input type="password" onChange={(e) => console.log(e.target.value)} />
			<CustomComponent name="Saleh" isLoggedIn={false} /> */}

			{/* For step 16 of learning */}
			<Text as="h1" size="lg">
				Heading
			</Text>
			<Text as="p" size="md">
				Paragraph
			</Text>
			<Text as="a" href="#" size="sm">
				Label
			</Text>
			<br />
			<Text as="label" htmlFor="someId" size="md">
				Label
			</Text>
		</div>
	);
}

export default App;
