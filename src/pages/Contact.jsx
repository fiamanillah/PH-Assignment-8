import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ContactModal from "../components/ContactModal";

function Contact() {
	const location = useLocation();
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const messageRef = useRef(null);
	const [isModalActive, setIsModalActive] = useState(false);

	useEffect(() => {
		document.title = "Contact | Gadget Heaven";
	}, [location]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;

		console.log("Name:", name);
		console.log("Email:", email);
		console.log("Message:", message);

		nameRef.current.value = "";
		emailRef.current.value = "";
		messageRef.current.value = "";

		setIsModalActive(true);
	};

	return (
		<section>
			<div className="bg-primary">
				<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto text-center text-white">
					<h1 className="text-white">Contact Us</h1>
					<p className="text-white">
						If you have any questions or need assistance, please fill out the form
						below:
					</p>
				</div>
			</div>
			<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto text-center text-white">
				<div className="w-full mx-auto p-5 flex items-center justify-between gap-4 md-p:flex-col">
					<form
						className="mt-5 w-full text-black text-left font-bold basis-1/2"
						onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block mb-2">Name:</label>
							<input
								type="text"
								ref={nameRef}
								className="border p-2 w-full rounded-xl font-medium"
								placeholder="Your Name"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2">Email:</label>
							<input
								type="email"
								ref={emailRef}
								className="border p-2 w-full rounded-xl font-medium"
								placeholder="Your Email"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2">Message:</label>
							<textarea
								ref={messageRef}
								className="border p-2 w-full rounded-xl font-medium"
								rows="5"
								placeholder="Your Message"></textarea>
						</div>
						<button
							type="submit"
							className="bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary-dark">
							Submit
						</button>
					</form>
					<div className="basis-1/2">
						<img src="/contactus.gif" alt="Contact Us" />
					</div>
				</div>
			</div>
			{isModalActive && <ContactModal setIsModalActive={setIsModalActive} />}
		</section>
	);
}

export default Contact;
