import React from "react";

//icons 
import { IoClose } from "react-icons/io5";

const Cart = () => {
	return (
		<div classname="w-full h-full px-4 text-white">
			<div>
				<div className="text-4x1 w-20 h-[98px] flex justify-start items-center cursor-pointer">
					<IoClose />
				</div>
			</div>
		</div>
	);
};

export default Cart;