import React, { useContext } from "react";

//icons
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";

//context
import { CartContext } from "../context/CartContext";

//cart item
import CartItem from "../components/CartItem";

const Cart = () => {
	const { setIsOpen, cart, total } = useContext(CartContext);
	return (
		<div className="w-full h-full px-4 text-white">
			<div className="overflow-y-auto overflow-x-hidden h-[75vh]">
				<div
					onClick={() => setIsOpen(false)}
					className="text-4x1 w-20 h-[98px] flex justify-start items-center cursor-pointer"
				>
					<IoClose />
				</div>
				<div className="flex flex-col gap-y-10 px-2">
					{cart.map((item) => {
						return <CartItem item={item} key={item.id} />;
					})}
				</div>
			</div>
			{/* subtotal e total */}
			{cart.length >= 1 && (
				<div className="px-6 py-10 flex flex-col">
					{/* subtotal */}
					<div className="flex justify-between text-lg">
						<div>Subtotal</div>
						<div>$ {total}</div>
					</div>
					{/* total */}
					<div className="flex justify-between text-2x1">
						<div>Total</div>
						<div>$ {total}</div>
					</div>
				</div>
			)}
			{/* buttons */}
			<div className="px-6">
				{cart.length >= 1 ? (
					<div className="flex justify-between gap-x-4">
						<button className="btn btn-accent hover:bg-accent-hover text-primary">
							Clear cart
						</button>
						<button className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
							Checkout
							<IoArrowForward className="text-lg" />
						</button>
					</div>
				) : (
					<div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
						<div className="text-2xl">Your cart is empty</div>
						<div className="text-6xl">
							<IoCartOutline />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
