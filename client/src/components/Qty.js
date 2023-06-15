import React from "react";

//context
// import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
	console.log(item);
	return (
		<div>
			{item.amount > 10 ? (
				<select>Select </select>
			) : (
				<input
					className="text-primary placeholder:text-primary h-12
	 				rounded-md p-4 w-[120px] outline-accent"
					type="text"
					placeholder={`${item.amount}`}
				/>
			)}
		</div>
	);
};

export default Qty;
