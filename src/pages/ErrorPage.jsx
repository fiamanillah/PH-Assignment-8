import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function ErrorPage() {

	const location = useLocation();

	useEffect(() => {
		document.title = "404 Not Found";
	}, [location]);

	return (
		<div className="flex flex-col items-center justify-start h-screen">
			<img className="max-w-[300px]" src="/404.png" alt="" />
			<p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
			<Link to="/" className="text-primary underline">
				Go back to Home
			</Link>
		</div>
	);
}

export default ErrorPage;
