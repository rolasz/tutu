import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const storedCartItems = JSON.parse(localStorage.getItem("cart"));
	const [cartItems, setCartItems] = useState(storedCartItems || []);

	const saveIntoLocalStorage = (data) => {
		localStorage.setItem("cart", JSON.stringify(data));
	};

	const addItemToCart = (item) => {
		setCartItems((pre) => {
			if (pre.includes(item)) {
				const cartItem = pre.find((cartItem) => cartItem.id == item.id);
				cartItem.quantity++;
				cartItem.subTotal += cartItem.productPrice;

				saveIntoLocalStorage(pre);
				return pre;
			} else {
				item.quantity = 1;
				item.subTotal = item.productPrice;

				saveIntoLocalStorage([...pre, item]);
				return [...pre, item];
			}
		});
	};

	const removeItemFromCart = (cartItemId) => {
		const filteredCart = cartItems.filter((item) => item.id !== cartItemId);

		saveIntoLocalStorage(filteredCart);
		setCartItems(filteredCart);
	};

	const clearCart = () => {
		setCartItems([]);
		localStorage.removeItem("cart");
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				setCartItems,
				addItemToCart,
				removeItemFromCart,
				clearCart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};
