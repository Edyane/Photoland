import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [itemsAmount, setItemsAmount] = useState(0);
	const [amount, setAmount] = useState(0);
	const [total, setTotal] = useState(0);

	//Add to cart 
	const addToCart = (item, id) => {
		const itemID = parseInt(id);
		console.log(item);
	}

	
	return (
		<CartContext.Provider value={{ isOpen, setIsOpen, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;