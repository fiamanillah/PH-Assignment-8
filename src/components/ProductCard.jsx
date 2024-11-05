import { Link } from "react-router-dom";
function ProductCard( {product}) {


	return (
		<div className="bg-white p-3 rounded-xl">
			<img
				className="h-[200px] w-full object-cover rounded-lg m-0 border"
				src={product.product_image}
				alt=""
			/>
			<div className="flex flex-col items-start">
				<h3 className="my-2">{product.product_title}</h3>
				<span className="font-medium mb-2">${product.price}</span>
				<Link to={`/product/${product.product_id}`}>
					<button className="text-primary border-2 border-primary py-2 px-4 rounded-full font-bold hover:bg-primary hover:text-white duration-200 active:scale-95">
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
}

export default ProductCard;
