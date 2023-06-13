import React from "react";

//context
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
	console.log(item);
	return <div>
		{item.amount > 10 ? <select>Select </select> : <input type="text"/>}
	</div>;
};

export default Qty;
