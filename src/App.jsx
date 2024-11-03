import { useEffect, useState } from "react";

function App() {
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		async function dataFetch() {
			const response = await fetch("gadget_heaven_products.json");
			const data = await response.json();
			setProductData(data);
		}
		dataFetch();
	}, []);

	return (
		<div>
			<ul>
				{productData.map((prod) => (
					<li className="p-3" key={prod.product_id}>
						<span>{prod.product_title}</span>
            <img src={prod.product_image} alt="" />
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
