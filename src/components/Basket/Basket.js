import React, { useEffect, useState } from "react";
import "./Basket.css";
import logo from "../../shopping-basket-svgrepo-com.svg";
import Apple from "../Apple/Apple";
const Basket = ({ apples }) => {
	// using the effect to get the apples in different times
	const [count, setCount] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			if (count >= apples.length) {
				clearInterval(interval);
			} else {
				setCount((count) => count + 1);
			}
		}, 500);
		return () => {
			clearInterval(interval);
			setCount(0);
		};
	}, [apples]);

	// setting the sepettekiElmalar to the sliced between zero and count value, each time count increases, sepettekiElmalar increases
	// mapped apples while returning the Apple component
	let sepettekiElmalar = apples.slice(0, count).map((elmalar, index) => {
		return <Apple key={index} />;
	});
	return (
		<>
			<div className='fixed-top d-flex m-5' data-testid='baskettest'>
				{/*  displaying the basket itself */}
				<img src={logo} alt='logo' height='300' />
				{/*  displaying the apples "in the basket" */}
				<div style={{ marginTop: 175, marginLeft: -250 }}>
					{sepettekiElmalar}
				</div>
			</div>
		</>
	);
};

export default Basket;
