import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import { useForm } from "@formspree/react";

function Contact() {
	const location = useLocation();
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const messageRef = useRef(null);
	const [isModalActive, setIsModalActive] = useState(false);
	const [loading, setLoading] = useState(false); // Added loading state
	const [state, handleSubmit] = useForm("xdkogerb");

	useEffect(() => {
		document.title = "Contact | Gadget Heaven";
	}, [location]);

	useEffect(() => {
		if (state.submitting) {
			setLoading(true); // Set loading to true when form is submitting
		}

		if (state.succeeded) {
			setLoading(false); // Set loading to false once submission succeeds
			nameRef.current.value = "";
			emailRef.current.value = "";
			messageRef.current.value = "";

			setIsModalActive(true);
		}
	}, [state.submitting, state.succeeded]);

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
						onSubmit={handleSubmit}
						className="mt-5 w-full text-black text-left font-bold basis-1/2">
						<div className="mb-4">
							<label className="block mb-2" htmlFor="name">
								Name:
							</label>
							<input
								type="text"
								ref={nameRef}
								name="name"
								className="border p-2 w-full rounded-xl font-medium"
								placeholder="Your Name"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2" htmlFor="email">
								Email:
							</label>
							<input
								type="email"
								name="email"
								ref={emailRef}
								className="border p-2 w-full rounded-xl font-medium"
								placeholder="Your Email"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2" htmlFor="message">
								Message:
							</label>
							<textarea
								ref={messageRef}
								className="border p-2 w-full rounded-xl font-medium"
								rows="5"
								name="message"
								placeholder="Your Message"
								required></textarea>
						</div>
						<button
							type="submit"
							className="bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed"
							disabled={loading} 
						>
							{loading ? "Submitting..." : "Submit"} 
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
