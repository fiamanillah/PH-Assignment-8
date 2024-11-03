import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

function Header() {
	return (
		<header>
			<div className=" bg-[#9538e2] flex justify-between items-center max-w-screen-xl py-5 px-[2%] mx-auto prose-a:text-white prose-">
				
            <Link to="/"><img className="h-14" src="GadgetHeavenWhiteLogo.png" alt="" /></Link> 
				<nav>
					<ul className="list-none flex gap-3 prose-a:no-underline ">
						<li>
							<NavLink to="/">Home</NavLink>{" "}
						</li>
						<li>
							<NavLink to="/statistics">Statistics</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
					</ul>
				</nav>

				<div className="flex gap-2">
					<div className="relative">
						<button className="text-2xl text-black rounded-full bg-slate-50 hover:bg-stone-200 active:bg-slate-100 active:scale-95 duration-200 h-10 w-10 flex justify-center items-center ">
							<MdOutlineShoppingCart />
						</button>
						<span className="absolute flex justify-center items-center text-white font-bold text-sm -top-2 right-0 bg-purple-700 rounded-full w-5 h-5 outline-2 outline">
							1
						</span>
					</div>

					<button className="text-2xl text-black rounded-full bg-slate-50 h-10 w-10 flex justify-center items-center">
						<FaRegHeart />
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
