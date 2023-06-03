import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [itemsAmount, setItemsAmount] = useState(0);
	const [amount, setAmount] = useState(0);
	const [total, setTotal] = useState(0);

	//add to cart 
	const addToCart = (items, id)=> {
		console.log(id);
	};

	return (
		<CartContext.Provider value={{ isOpen, setIsOpen, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;