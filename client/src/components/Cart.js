import React, { useContext } from "react";

//icons 
import { IoClose } from "react-icons/io5";

//context
import { CartContext } from "../context/CartContext";

//cart item
import CartItem from "../components/CartItem";

const Cart = () => {
	const { setIsOpen, cart } = useContext(CartContext);
	return (
		<div className="w-full h-full px-4 text-white">
			<div>
				<div onClick={()=> setIsOpen(false)} className="text-4x1 w-20 h-[98px] flex justify-start items-center cursor-pointer">
					<IoClose />
				</div>
				<div>
					{cart.map((item) => {
						return <CartItem item={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Cart;