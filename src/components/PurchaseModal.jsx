import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PurchaseModal({ setIsModalActive, totalPrice }) {
	const navigate = useNavigate();

	const handleClose = () => {
		setIsModalActive(false);
		navigate("/"); // Navigate to the home page
	};

	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return (
		<div className="fixed inset-0 bg-[#0000006a] flex justify-center items-center">
			<div className="bg-white p-5 rounded-2xl flex flex-col items-center prose-p:m-1 prose-h1:m-2">
				<img src="/success.svg" alt="" />
				<h1>Payment Successful</h1>
				<p>Thanks for purchasing</p>
				<p className="font-bold">
					Total: <span>{totalPrice}$</span>
				</p>
				<button
					className="py-3 bg-slate-300 w-full rounded-2xl hover:bg-slate-400 text-xl font-bold active:bg-slate-300 active:scale-95 duration-200"
					onClick={handleClose}>
					Close
				</button>
			</div>
		</div>
	);
}

export default PurchaseModal;
