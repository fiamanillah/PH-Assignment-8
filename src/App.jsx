import { useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ProductLayout from "./layouts/ProductLayout";
import { useEffect } from "react";

function App() {
	const location = useLocation();

	useEffect(() => {
		document.title = "Home";
	}, [location]);

	return (
		<div>
			<HeroSection />
			<ProductLayout />
		</div>
	);
}

export default App;
