function Footer() {
	return (
		<footer className="bg-white">
			<div className="flex flex-col justify-center text-center items-center max-w-screen-xl py-5 px-[2%] mx-auto">
				<div>
					<h1>Gadget Heaven</h1>
					<p>Leading the way in cutting-edge technology and innovation.</p>
				</div>
				<hr className="w-full m-0" />

				<div className="flex justify-around w-full">
					<div>
						<h3>Services</h3>
						<ul className="prose-li:list-none m-0 p-0">
							<li>Product Support</li>
							<li>Order Tracking</li>
							<li>Shipping & Delivery</li>
							<li>Returns</li>
						</ul>
					</div>

					<div>
						<h3>Company</h3>
						<ul className="prose-li:list-none m-0 p-0">
							<li>About Us</li>
							<li>Careers</li>
							<li>Contact</li>
						</ul>
					</div>
					<div>
						<h3>Legal</h3>
						<ul className="prose-li:list-none m-0 p-0">
							<li>Terms of Service</li>
							<li>Privacy Policy</li>
							<li>Cookie Policy</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
