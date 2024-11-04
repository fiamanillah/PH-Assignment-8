import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
function ProductDetails() {
	const { products } = useContext(ProductContext);
	const { productid } = useParams();
	const product = products.find((prod) => prod.product_id === parseInt(productid));

	console.log(product);

	return (
		<section className="bg-primary">
			<div className=" flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto relative pb-[200px] mb-[400px]">
				<div className="text-white text-center">
					<h1 className="text-white">{productid} Product Details</h1>
					<p>
						Explore the latest gadgets that will take your experience to the next level.
						From smart devices to the coolest accessories, we have it all!
					</p>
				</div>

				<div className="absolute -bottom-[300px] w-full">
					<div className="bg-white overflow-hidden rounded-3xl w-11/12 mx-auto flex gap-2 p-3">
						<img className="w-5/12 m-0 p-0 rounded-xl object-cover border" src={product.product_image} alt="" />

						<div>
							<h2 className="m-0 p-0">{product.product_title}</h2>
							<span>Price: $ {product.price}</span>
							<p>{product.description}</p>
							<strong>Specification:</strong>
							<ol>
								{product.specification.map((specs) => (
									<li key={specs}>{specs}</li>
								))}
							</ol>
							<strong>Rating</strong> <br />
							<span>{product.rating}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductDetails;
