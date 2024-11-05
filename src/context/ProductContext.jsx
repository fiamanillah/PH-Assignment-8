import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const response = await fetch("/gadget_heaven_products.json");
			const data = await response.json();
			setProducts(data);
		}

		loadProducts();
	}, []);

	return (
		<ProductContext.Provider value={{ products, id: 2 }}>{children}</ProductContext.Provider>
	);
}

export default ProductContextProvider;
