function ContactModal({ setIsModalActive }) {
	return (
		<div className="fixed inset-0 bg-[#0000006a] flex justify-center items-center">
			<div className="bg-white p-5 rounded-2xl flex flex-col items-center prose-p:m-1 prose-h1:m-2">
				<img src="/contactsuccess.png" alt="Success" className="w-16 h-16 mb-4" />
				<h1 className="text-2xl font-bold">Message Sent!</h1>
				<p>Thank you for reaching out to us.</p>
				<p>We will get back to you as soon as possible.</p>
				<button
					className="py-3 bg-slate-300 w-full rounded-2xl hover:bg-slate-400 text-xl font-bold active:bg-slate-300 active:scale-95 duration-200 mt-4"
					onClick={() => {
						setIsModalActive(false);
					}}>
					Close
				</button>
			</div>
		</div>
	);
}

export default ContactModal;
