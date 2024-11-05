import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [wishlistItems, setWishlistItems] = useState([]);
	const [activeTab, setActiveTab] = useState("cart");

	const successToast = (msg) => {
		toast.success(msg);
	};

	const infoToast = (msg) => {
		toast.info(msg);
	};

	const errorToast = (msg) => {
		toast.error(msg);
	};

	const cartTabActive = () => {
		setActiveTab("cart");
	};

	const wishTabActive = () => {
		setActiveTab("wishlist");
	};

	const addToCart = (item) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find(
				(cartItem) => cartItem.product_id === item.product_id
			);

			if (existingItem) {
				return prevItems.map((cartItem) =>
					cartItem.product_id === item.product_id
						? { ...cartItem, count: cartItem.count + 1 }
						: cartItem
				);
			} else {
				return [...prevItems, { ...item, count: 1 }];
			}
		});
		successToast("Added to cart");
	};

	const removeFromCart = (itemId) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== itemId));
		infoToast("Item Removed");
	};

	const increaseCartItem = (itemId) => {
		setCartItems((prevItems) => {
			return prevItems.map((cartItem) =>
				cartItem.product_id === itemId
					? { ...cartItem, count: cartItem.count + 1 }
					: cartItem
			);
		});
	};

	const dicreaseCartItem = (itemId) => {
		setCartItems((prevItems) => {
			return prevItems
				.map((cartItem) => {
					if (cartItem.product_id === itemId && cartItem.count > 1) {
						return { ...cartItem, count: cartItem.count - 1 };
					} else if (cartItem.product_id === itemId && cartItem.count === 1) {
						return null;
					} else {
						return cartItem;
					}
				})
				.filter((item) => item !== null);
		});
	};

	const addToWishlist = (item) => {
		setWishlistItems((prevItems) => [...prevItems, item]);
		successToast("Added to Wishlist");
	};

	const removeFromWishlist = (itemId) => {
		setWishlistItems((prevItems) => prevItems.filter((item) => item.product_id !== itemId));
		infoToast("Item Removed");
	};

	const sortByPrice = () => {
		const sortedCartItem = [...cartItems].sort((a, b) => b.price - a.price);
		setCartItems(sortedCartItem);
		successToast("Product sorted");
	};

	const makeCartEmpty = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				increaseCartItem,
				dicreaseCartItem,
				wishlistItems,
				addToWishlist,
				removeFromWishlist,
				activeTab,
				cartTabActive,
				wishTabActive,
				sortByPrice,
				makeCartEmpty,
				errorToast,
			}}>
			{children}
		</CartContext.Provider>
	);
};
