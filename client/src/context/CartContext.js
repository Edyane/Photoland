import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [itemsAmount, setItemsAmount] = useState(0);
	const [amount, setAmount] = useState(0);
	const [total, setTotal] = useState(0);

	// cart amount 
	useEffect(() => {
		const amount = cart.reduce((a, c) => {
			return a + c.amount;
		}, 0);

		setItemsAmount(amount);
	}, [cart]);

	//Add to cart
	const addToCart = (item, id) => {
		const itemID = parseInt(id);
		const newItem = { ...item[0], amount: 1 };
		setCart([...cart, newItem]);
		//check if item already in the cart
		const cartItem = cart.find((item) => {
			return item.id === itemID;
		});

		if (cartItem) {
			const newCart = cart.map((item) => {
				if (item.id === itemID) {
					setAmount(cartItem.amount + 1);
					return {...item, amount: cartItem.amount + 1};
				} else {
					return item;
				}
			});
			setCart(newCart);
		} else {
			setCart([...cart, newItem])
		}

		// open the cart sidebar
		setIsOpen(true);
	};

	//cart amount 
	// useEffect(() => {
	// 	const amount = cart.reduce((a, c) => {
	// 		return a + c.amount;
	// 	})

	// 	setItemsAmount(amount);
	// }, [cart]);

	//Remove from cart 
	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => {
			return item.id !== id;
		});
		setCart(newCart);
	}

	//Handle input
	const handleInput = (e, id) => {
		const value = parseInt(e.target.value);
		//find the item in the cart by id 
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		
		if (cartItem) {
			const newCart = cart.map(item => {
				if (item.id === id) {
					if (isNaN(value)) {
						setAmount(1);
						return {...item, amount : 1}
					} else {
						setAmount(value);
						return {...item, amount : value};
					}
				} else {
					return item;
				}
			});
			setCart(newCart);
		}
		setIsOpen(true);
	};

	//Handle select 
	const handleSelect = (e, id) => {
		const value = e.target.value;
		const cartItem = cart.find(item => {
			return item.id === id
		});
		if (cartItem) {
			const newCart = [...cart].map(item => {
				if (item.id === id) {
					setAmount(value);
					return {...item, amount:value};
				}
			})
		}
	};
		
	return (
		<CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart, removeFromCart, itemsAmount, handleInput, handleSelect }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
