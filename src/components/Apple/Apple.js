import React from "react";
import logo from "../../real-food.svg";
import "./Apple.css";

const Apple = () => {
	return (
		<div className='d-inline-block apple'>
			{/*  displaying the apple itself */}
			<img src={logo} alt='logo' height='25' />
		</div>
	);
};

export default Apple;
