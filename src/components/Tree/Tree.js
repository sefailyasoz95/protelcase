import React from "react";
import logo from "../../Tree76.svg";
import "./Tree.css";

const Tree = ({ shaking }) => {
	return (
		<div className='m-5' data-testid='treetest'>
			<img src={logo} alt='logo' height='250' className={shaking} />
		</div>
	);
};
export default Tree;
