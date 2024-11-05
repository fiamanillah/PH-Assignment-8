import { Link } from "react-router-dom";

function HeroSection() {
	return (
		<section>
			<div className="bg-[#9538e2] flex flex-col relative justify-center items-center max-w-screen-xl py-5 px-[2%] pb-60 rounded-b-3xl mx-auto">
				<div className="flex flex-col max-w-[60%] lg-t:max-w-[70%] md-p:max-w-[90%] text-center justify-center items-center prose-h1:text-white text-white">
					<h1>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
					<p>
						Explore the latest gadgets that will take your experience to the next level.
						From smart devices to the coolest accessories, we have it all!
					</p>
					<Link to="/dashboard">
						<button className="py-2 px-6 bg-white text-[#9538e2] font-bold rounded-full hover:bg-stone-100 active:bg-stone-50 active:scale-95 duration-200">
							Shop Now
						</button>
					</Link>
				</div>

				<div className="absolute -bottom-[230px] lg-t:-bottom-[200px] md-p:-bottom-[150px] sm-p:-bottom-[100px] md-p:w-5/6  w-4/6 p-4 rounded-2xl border-2 bg-[#ffffff77] backdrop-blur-md">
					<img
						className="mx-auto my-0 max-h-[400px] object-cover w-full rounded-xl"
						src="/banner.jpg"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
