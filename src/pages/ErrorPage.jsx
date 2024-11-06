import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function ErrorPage() {

	const location = useLocation();

	useEffect(() => {
		document.title = "404 Not Found";
	}, [location]);

	return (
		<div className="flex fixed inset-0 z-10 bg-slate-50 flex-col items-center justify-center h-screen">
			<img className="max-w-[300px] m-0" src="/404.png" alt="" />
			<p className="text-lg mb-3 mt-0">Sorry, the page you are looking for does not exist.</p>
			<Link to="/" className="text-primary underline">
				Go back to Home
			</Link>
		</div>
	);
}

export default ErrorPage;
