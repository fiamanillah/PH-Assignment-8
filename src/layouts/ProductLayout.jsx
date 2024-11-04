import ProductCard from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductLayout() {
	const { products } = useContext(ProductContext);
	const [filteredProduct, setFilteredProduct] = useState(products);
	useEffect(() => {
		setFilteredProduct(products);
	}, [products]);
	const productsCatagory = [...new Set(products.map((poduct) => poduct.category))];
	console.log(products);
	function handleFilterProduct(catagory) {
		const newProduct = products.filter((prod) => prod.category === catagory);
		setFilteredProduct(newProduct);
	}

	return (
		<section>
			<div className=" flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto mt-[300px] lg-t:mt-[250px] md-p:mt-[200px] sm-p:mt-[160px]">
				<h1 className="text-center">Explore Cutting-Edge Gadgets</h1>
				<div className="flex gap-3 sm-p:flex-col items-start">
					<div className="basis-3/12 bg-white p-2 rounded-xl">
						<ul className="prose-li:list-none m-0 p-0 ">
							<li className="w-full p-0">
								<button
									className="bg-slate-200 text-left p-2 rounded-full w-full font-medium"
									onClick={() => {
										setFilteredProduct(products);
									}}>
									All Product
								</button>
							</li>
							{productsCatagory.map((catagory) => (
								<li className="w-full p-0" key={catagory}>
									<button
										className="bg-slate-200 text-left py-2 px-4 rounded-full w-full font-medium"
										onClick={() => {
											handleFilterProduct(catagory);
										}}>
										{catagory}
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className="grid grid-cols-3 gap-3 lg-t:grid-cols-2 md-p:grid-cols-1">
						{filteredProduct.map((Product) => (
							<ProductCard product={Product} key={Product.product_id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductLayout;
