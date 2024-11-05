import ProductCard from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function ProductLayout() {
	const { products } = useContext(ProductContext);
	const { category } = useParams(); // Get the category from the URL
	const navigate = useNavigate(); // For navigation to the error page
	const [filteredProduct, setFilteredProduct] = useState(products);
	const [activeCategory, setActiveCategory] = useState(category || "all");

	const productCategories = [...new Set(products.map((product) => product.category))];

	useEffect(() => {
		if (category && category !== "all" && !productCategories.includes(category)) {
			navigate("/error", { replace: true }); 
		} else {
			setActiveCategory(category || "all"); 
		}
	}, [category, productCategories, navigate]);

	useEffect(() => {
		if (activeCategory === "all") {
			setFilteredProduct(products);
		} else {
			const newProduct = products.filter((prod) => prod.category === activeCategory);
			setFilteredProduct(newProduct);
		}
	}, [activeCategory, products]);

	return (
		<section>
			<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto mt-[300px] lg-t:mt-[250px] md-p:mt-[200px] sm-p:mt-[160px]">
				<h1 className="text-center">Explore Cutting-Edge Gadgets</h1>
				<div className="flex gap-3 sm-p:flex-col items-start">
					<div className="basis-2/12 bg-white p-2 rounded-xl">
						<ul className="prose-li:list-none m-0 p-0 flex flex-col">
							<li className="w-full p-0 prose-a:no-underline prose-a:block text-left rounded-full font-medium">
								<NavLink
									to={`/category/all`}
									className={`text-left p-2 px-4 rounded-full w-full font-medium ${
										activeCategory === "all" ? "bg-primary text-white" : "bg-slate-200"
									}`}
									onClick={() => setActiveCategory("all")}
								>
									All Products
								</NavLink>
							</li>
							{productCategories.map((cat) => (
								<li
									className={`w-full p-0 prose-a:no-underline prose-a:block text-left py-2 px-4 rounded-full font-medium ${
										activeCategory === cat ? "bg-primary prose-a:text-white" : "bg-slate-200"
									}`}
									key={cat}
								>
									<NavLink to={`/category/${cat}`} onClick={() => setActiveCategory(cat)}>
										{cat}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className="basis-10/12 grid grid-cols-3 gap-3 lg-t:grid-cols-2 md-p:grid-cols-1">
						{filteredProduct.map((product) => (
							<ProductCard product={product} key={product.product_id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductLayout;
