import { CartContext } from "../context/CartContext";
import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
function CartItem({cartItem}) {
	const { increaseCartItem, dicreaseCartItem, removeFromCart } =
		useContext(CartContext);
		
		
	return (
		<div>
			<div
				className="flex gap-3 text-left bg-white rounded-2xl prose-h1:m-0 prose-p:m-0 prose-img:m-0 p-3"
				key={Math.random()}>
				<img
					className=" max-w-[200px] object-cover rounded-2xl border-2"
					src={cartItem.product_image}
					alt=""
				/>
				<div className="flex justify-between w-full">
					<div className="flex flex-col items-start justify-between gap-2">
						<h1>{cartItem.product_title}</h1>
						{/* <p>{cartItem.description}</p> */}
						<strong>Price: $ {cartItem.price}</strong>
						<div className="flex gap-3 rounded-full items-center border-t-2 border-b-2">
							<button
								className="font-bold text-xl border-2 h-8 w-8 flex justify-center items-center rounded-full hover:bg-slate-100 active:bg-slate-50 duration-200 active:scale-95 select-none"
								onClick={() => {
									dicreaseCartItem(cartItem.product_id);
								}}>
								-
							</button>
							<span>{cartItem.count}</span>
							<button
								className="font-bold text-xl border-2 h-8 w-8 flex justify-center items-center rounded-full hover:bg-slate-100 active:bg-slate-50 duration-200 active:scale-95 select-none"
								onClick={() => {
									increaseCartItem(cartItem.product_id);
								}}>
								+
							</button>
						</div>
					</div>
					<button
						className="text-2xl text-red-500 self-start"
						onClick={() => {
							removeFromCart(cartItem.product_id);
						}}>
						<RxCrossCircled />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
