import { CartContext } from "../context/CartContext";
import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

function WishlistItem({ wishItem }) {
	const { removeFromWishlist, addToCart } = useContext(CartContext);

	

	return (
		<div>
			<div
				className="flex gap-3 text-left bg-white rounded-2xl prose-h1:m-0 prose-p:m-0 prose-img:m-0 p-3"
				key={Math.random()}>
				<img
					className=" max-w-[200px] object-cover rounded-2xl border-2"
					src={wishItem.product_image}
					alt=""
				/>
				<div className="flex justify-between w-full">
					<div className="flex flex-col items-start justify-between gap-2">
						<h1>{wishItem.product_title}</h1>
						{/* <p>{wishItem.description}</p> */}
						<strong>Price: $ {wishItem.price}</strong>
						<div className="flex gap-3 rounded-full items-center border-t-2 border-b-2">
							<button
								className="flex justify-center items-center gap-2 bg-primary text-white font-bold px-2 py-1 rounded-full"
								onClick={() => {
									addToCart(wishItem);
									removeFromWishlist(wishItem.product_id);
								}}>
								Add to Cart <MdOutlineShoppingCart />
							</button>
						</div>
					</div>
					<button
						className="text-2xl text-red-500 self-start"
						onClick={() => {
							removeFromWishlist(wishItem.product_id);
						}}>
						<RxCrossCircled />
					</button>
				</div>
			</div>
		</div>
	);
}

export default WishlistItem;
