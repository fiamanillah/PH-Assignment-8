import ProductCard from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function ProductLayout() {
	const { products } = useContext(ProductContext);
	const { category } = useParams();
	const navigate = useNavigate();
	const [filteredProduct, setFilteredProduct] = useState([]);
	const [activeCategory, setActiveCategory] = useState(category || "all");
	const [showCatagory, setShowCatagory] = useState(false);

	const productCategories = products.length
		? [...new Set(products.map((product) => product.category))]
		: [];

	useEffect(() => {
		if (products.length > 0) {
			if (category && category !== "all" && !productCategories.includes(category)) {
				navigate("/error", { replace: true });
			} else {
				setActiveCategory(category || "all");
			}
		}
	}, [category, productCategories, navigate, products]);

	// Filter products based on the active category
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
			<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto mt-[300px] lg-t:mt-[250px] md-p:mt-[200px] sm-p:mt-[160px] lg-t:mx-[1%] ">
				<h1 className="text-center">Explore Cutting-Edge Gadgets</h1>
				<div className="flex gap-3 sm-p:flex-col items-start relative">
					<button
						className="hidden sm-p:block bg-primary font-bold py-2 px-4 rounded-full text-white border-2 border-primary hover:bg-slate-100 hover:text-primary active:scale-95 active:bg-slate-50 duration-200"
						onClick={() => {
							setShowCatagory((prev) => !prev);
						}}>
						Catagories
					</button>
					<div
						className={`basis-2/12 lg-t:basis-3/12 sm-p:basis-full bg-white p-2 rounded-xl border-2 sm-p:shadow-xl sm-p:origin-top-left sm-p:duration-200 sm-p:absolute sm-p:top-16 ${
							showCatagory ? "sm-p:scale-100" : "sm-p:scale-0"
						}`}>
						<ul className="prose-li:list-none m-0 p-0 flex flex-col">
							<li className="w-full p-0 prose-a:no-underline prose-a:block text-left rounded-full font-medium">
								<NavLink
									to={`/category/all`}
									className={`text-left p-2 px-4 rounded-full w-full font-medium ${
										activeCategory === "all"
											? "bg-primary text-white"
											: "bg-slate-200"
									}`}
									onClick={() => setActiveCategory("all")}>
									All Products
								</NavLink>
							</li>
							{productCategories.map((cat) => (
								<li
									className={`w-full p-0 prose-a:no-underline prose-a:block text-left py-2 px-4 rounded-full font-medium ${
										activeCategory === cat
											? "bg-primary prose-a:text-white"
											: "bg-slate-200"
									}`}
									key={cat}>
									<NavLink
										to={`/category/${cat}`}
										onClick={() => setActiveCategory(cat)}>
										{cat}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className="basis-10/12 lg-t:basis-9/12 sm-p:basis-full sm-p:w-full grid grid-cols-3 gap-3 lg-t:grid-cols-2 md-p:grid-cols-1">
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
