import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Apple from "./components/Apple/Apple";
import Basket from "./components/Basket/Basket";
import Tree from "./components/Tree/Tree";

function App() {
	// creating an empty array to be able to map the apples state accordingly
	// setting initial states
	let appleArray = [];
	const [apples, setApples] = useState([]);
	const [btnDisabled, setBtnDisabled] = useState(false);
	const [applesInBasket, setapplesInBasket] = useState([]);
	const [count, setCount] = useState(0);
	const [shaking, setShaking] = useState("");

	// shake the tree buttons onclick event
	const handleShaking = () => {
		// set the Apple component class = img so that tree shaking animation will be played
		// set apples and applesinbasket state to empty an array in case of re-running the function so that
		// new apples can drop from the tree and be displayed on the basket
		setShaking("img");
		setBtnDisabled(true);
		setApples([]);
		setapplesInBasket([]);
		var x = Math.floor(Math.random() * 10) + 1;
		for (var i = 0; i < x; i++) {
			appleArray.push(i);
		}
		// take back the css that shakes the tree after 3 seconds
		// set apples state with the random generated applearray length
		// after array length times 0.8s set apple state to empty array
		// to be able to display the apples on the basket send the applearray to the applesinbasket state
		setTimeout(() => {
			setApples(appleArray);
			setShaking("");
			setTimeout(() => {
				setApples([]);
				setapplesInBasket(appleArray);
				setBtnDisabled(false);
				// setting the settimout functions timeout value to the array length * 1s
				// because i wanted to send the apples to the basket 1s after of the last apple drop
			}, appleArray.length * 1000);
		}, 3000);
	};

	// useeffect with apples dependency so each time apples state changed effect can  re-run
	useEffect(() => {
		// setting an interval by the length of the apples state with the timing of 0.5s
		const interval = setInterval(() => {
			if (count >= apples.length) {
				clearInterval(interval);
			} else {
				setCount((count) => count + 1);
			}
		}, 500);
		return () => {
			// cleanup the effect
			clearInterval(interval);
			setCount(0);
		};
	}, [apples]);
	// setting the elmalar to the sliced between zero and count value, each time count increases, elmalar increases
	// mapped apples while returning the Apple component
	let elmalar = apples.slice(0, count).map((apple, index) => {
		return <Apple key={index} />;
	});
	return (
		<div className='App col-md-12'>
			<Button onClick={handleShaking} className='mt-3' disabled={btnDisabled}>
				Shake the Tree
			</Button>
			<div>
				<Tree shaking={shaking} />
				{apples ? ( //apples state is not empty ? yes : no
					<div className='d-inline-block apple'> {elmalar}</div>
				) : (
					<></>
				)}
			</div>
			{applesInBasket ? ( // applesinbasket state is not empty ? yes : no
				<Basket apples={applesInBasket} count={count} />
			) : (
				<Basket apples={[]} />
			)}
		</div>
	);
}

export default App;
