import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Header() {
	const location = useLocation();
	const navigate =useNavigate();

	const { cartItems, wishlistItems, cartTabActive, wishTabActive } = useContext(CartContext);

	const totalItems = cartItems.reduce((total, item) => {
		return total + item.count;
	}, 0);

	return (
		<header className="pt-5">
			<div
				className={` ${
					location.pathname === "/"
						? "bg-[#9538e2] prose-a:text-white"
						: "bg-slate-100 prose-a:text-black"
				} flex justify-between items-center max-w-screen-xl px-[2%] mx-auto   rounded-t-3xl`}>
				<Link to="/">
					<img
						className="h-14"
						src={
							location.pathname == "/"
								? "/GadgetHeavenWhiteLogo.png"
								: "/GadgetHeavenPurpleLogo.png"
						}
						alt=""
					/>
				</Link>
				<nav>
					<ul className="list-none flex gap-3 prose-a:no-underline ">
						<li>
							<NavLink to="" className={({ isActive }) => (isActive ? "bg-purple-700 " : "") + "py-2 px-4 rounded-2xl"}>Home</NavLink>
						</li>
						<li>
							<NavLink to="statistics" className={({ isActive }) => (isActive ? "bg-purple-700 " : "") + "py-2 px-4 rounded-2xl"}>Statistics</NavLink>
						</li>
						<li>
							<NavLink to="dashboard" className={({ isActive }) => (isActive ? "bg-purple-700 " : "") + "py-2 px-4 rounded-2xl"}>Dashboard</NavLink>
						</li>
						<li>
							<NavLink to="contact" className={({ isActive }) => (isActive ? "bg-purple-700 " : "") + "py-2 px-4 rounded-2xl"}>Contact Us</NavLink>
						</li>
					</ul>
				</nav>

				<div className="flex gap-2">
					<div className="relative">
						<button className="text-2xl text-black rounded-full bg-slate-50 hover:bg-stone-200 active:bg-slate-100 active:scale-95 duration-200 h-10 w-10 flex justify-center items-center border" onClick={()=>{ navigate("/dashboard"); cartTabActive("cart")}}>
							<MdOutlineShoppingCart />
						</button>
						<span className="absolute flex justify-center items-center text-white font-bold text-sm -top-2 right-0 bg-purple-700 rounded-full w-5 h-5 outline-2 outline">
							{totalItems}
						</span>
					</div>

					<div className="relative">
						<button className="text-2xl text-black rounded-full bg-slate-50 hover:bg-stone-200 active:bg-slate-100 active:scale-95 duration-200 h-10 w-10 flex justify-center items-center border" onClick={()=>{ navigate("/dashboard"); wishTabActive("wishlist")}}>
							<FaRegHeart />
						</button>
						<span className="absolute flex justify-center items-center text-white font-bold text-sm -top-2 right-0 bg-red-700 rounded-full w-5 h-5 outline-2 outline">
							{wishlistItems.length}
						</span>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
