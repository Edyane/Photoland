import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
	return (
		<div className="flex">
			<Link to={`product/${item.id}`} className="w-[70px] h-[70px]">
				<img
					src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
					alt=""
				/>
			</Link>
			<div>
				{/* title and remove icon */}
			</div>
		</div>
	);
};

export default CartItem;