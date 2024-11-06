import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import WishlistItem from "../components/WishlistItem";
import { FaSortAmountDown } from "react-icons/fa";
import PurchaseModal from "../components/PurchaseModal";

function Dashboard() {
	const [isModalActive, setIsModalActive] = useState(false);
	const [totalPriceForModal, setTotalPriceForModal] = useState(0);
	const location = useLocation();
	const {
		activeTab,
		cartItems,
		wishlistItems,
		cartTabActive,
		wishTabActive,
		sortByPrice,
		makeCartEmpty,
		errorToast,
	} = useContext(CartContext);

	useEffect(() => {
		document.title = "Dashboard | Gadget Heaven";
	}, [location]);

	const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0);

	const handlePurchase = () => {
		if (cartItems.length > 0) {
			setTotalPriceForModal(totalPrice); // Store the total price before emptying the cart
			makeCartEmpty();
			setIsModalActive(true);
		} else {
			errorToast("Add Some Item first to purchase");
		}
	};

	return (
		<div>
			<section>
				<div className="bg-primary">
					<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto text-center text-white">
						<h1 className="text-white">Dashboard</h1>
						<p className="text-white">
							Explore the latest gadgets that will take your experience to the next
							level. From smart devices to the coolest accessories, we have it all!
						</p>

						<div className="flex justify-center gap-3">
							<button
								className={` font-bold py-2 px-6 rounded-full border-2 ${
									activeTab === "cart" ? "bg-white text-primary" : " "
								}`}
								onClick={() => {
									cartTabActive("cart");
								}}>
								Cart
							</button>
							<button
								className={`border-2 font-bold py-2 px-6 rounded-full ${
									activeTab === "wishlist" ? "bg-white text-primary" : " "
								}`}
								onClick={() => {
									wishTabActive("wishlist");
								}}>
								Wishlist
							</button>
						</div>
					</div>
				</div>

				{activeTab === "cart" && (
					<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto justify-between text-white prose-h2:m-0">
						<div className="flex sm-p:flex-col justify-between items-start py-10 w-full">
							<h2>Cart</h2>
							<div className="flex items-center sm-p:justify-between sm-p:w-full gap-3 sm-p:prose-h2:text-xl">
								<h2>
									Total cost: <span>{totalPrice}</span>$
								</h2>

								<button
									className="flex font-bold text-primary items-center border-2 border-primary py-2 px-4 rounded-full gap-2 sm-p:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
									disabled={totalPrice > 0 ? false : true}
									onClick={() => {
										cartItems.length > 0
											? sortByPrice()
											: errorToast("Add Item first to sort");
									}}>
									Sort by price <FaSortAmountDown />
								</button>

								<button
									className="flex font-bold bg-primary items-center border-2 border-primary py-2 px-4 rounded-full sm-p:text-sm"
									onClick={handlePurchase}>
									Purchase
								</button>
							</div>
						</div>

						<div className="text-black flex flex-col gap-4">
							{cartItems.map((cartItem) => (
								<CartItem key={cartItem.product_id} cartItem={cartItem} />
							))}
						</div>
					</div>
				)}

				{activeTab === "wishlist" && (
					<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto justify-between text-white prose-h2:m-0">
						<div className="flex justify-start items-center py-10 w-full">
							<h2>WishList</h2>
						</div>

						<div className="text-black flex flex-col gap-4">
							{wishlistItems.map((wishItem) => (
								<WishlistItem key={wishItem.product_id} wishItem={wishItem} />
							))}
						</div>
					</div>
				)}
				{isModalActive && (
					<PurchaseModal
						totalPrice={totalPriceForModal}
						setIsModalActive={setIsModalActive}
					/>
				)}
			</section>
		</div>
	);
}

export default Dashboard;
