import { useContext, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import ReactStars from "react-rating-stars-component";
import { FaRegStar, FaRegStarHalf, FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

function ProductDetails() {
	const location = useLocation();



	useEffect(() => {
		document.title = "Details | Gadget Heaven";
	}, [location]);

	const { productid } = useParams();
	const { products } = useContext(ProductContext);
	const { addToCart, wishlistItems, addToWishlist } = useContext(CartContext);
	const product = products.find((prod) => prod.product_id === parseInt(productid));

	const isWishlisted = wishlistItems.findIndex(
		(item) => item.product_title === product.product_title
	);

	if (!product) {
		return (
			<section className="bg-primary">
				<div className="text-white text-center py-5 prose-a:no-underline">
					<h1 className="text-white">No Product Found</h1>
					<Link to="/" className="text-primary bg-white rounded-lg py-1 px-3">
						Go back to Home
					</Link>
				</div>
			</section>
		);
	}

	return (
		<section className="bg-primary">
			<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto relative pb-[200px] mb-[400px]">
				<div className="text-white text-center">
					<h1 className="text-white">Product Details</h1>
					<p>
						Explore the latest gadgets that will take your experience to the next level.
						From smart devices to the coolest accessories, we have it all!
					</p>
				</div>

				<div className="absolute -bottom-[300px] w-full">
					<div className="bg-white overflow-hidden rounded-3xl w-11/12 mx-auto flex flex-col gap-4 p-3">
						<div className="flex gap-4">
							<img
								className="w-5/12 m-0 p-0 rounded-xl object-cover border"
								src={product.product_image}
								alt={product.product_title}
							/>

							<div className="flex flex-col items-start justify-between bg-slate-100 w-full rounded-2xl p-3">
								<h2 className="m-0 p-0">{product.product_title}</h2>
								<span className="font-bold">Price: $ {product.price}</span>
								{product.availability ? (
									<button className="block bg-green-200 border-green-500 border-2 py-0 px-3 rounded-full text-green-600 font-medium my-1 cursor-text select-text">
										In Stock
									</button>
								) : (
									<button className="block bg-red-200 border-red-500 border-2 py-0 px-3 rounded-full text-red-600 font-medium my-1 cursor-text select-text">
										Stock Out
									</button>
								)}

								<strong>Specification:</strong>
								<ol className="m-0 prose-li:m-0">
									{product.specification.map((specs) => (
										<li key={specs}>{specs}</li>
									))}
								</ol>
								<strong>Rating:</strong>
								<div className="flex gap-2 items-center mb-2">
									<ReactStars
										count={5}
										value={product.rating}
										size={24}
										edit={false}
										emptyIcon={<FaRegStar />}
										halfIcon={<FaRegStarHalf />}
										filledIcon={<FaStar />}
									/>
									<strong className="bg-slate-200 px-2 flex justify-center items-center rounded-xl">
										{product.rating}
									</strong>
								</div>

								<div className="flex gap-3">
									<button
										className="flex justify-center items-center gap-2 bg-primary hover:bg-transparent hover:text-primary border-2 border-primary duration-200 active:scale-95 text-white font-bold px-2 py-1 rounded-full active:bg-slate-50"
										onClick={() => {
											addToCart(product);
										}}>
										Add to Cart <MdOutlineShoppingCart />
									</button>
									<button
										className={` ${
											isWishlisted > -1
												? "text-red-500 border-red-500 cursor-not-allowed"
												: " hover:bg-stone-200 active:bg-slate-100 active:scale-95"
										} border-2 rounded-full p-2 flex duration-200 justify-center items-center `}
										onClick={() => {
											addToWishlist(product);
										}}
										disabled={isWishlisted > -1 ? true : false}>
										{isWishlisted > -1 ? <FaHeart /> : <FaRegHeart />}
									</button>
								</div>
							</div>
						</div>

						<div className="p-3 bg-slate-100 rounded-xl">
							<strong>Description:</strong>
							<p className="m-0 mb-2">{product.description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductDetails;
