import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

function ErrorPage() {
	const location = useLocation();

	useEffect(() => {
		document.title = "Error 404";
	}, [location]);

	return (
		<div className="prose max-w-none">
			<Header />
			<Footer />
		</div>
	);
}

export default ErrorPage;
