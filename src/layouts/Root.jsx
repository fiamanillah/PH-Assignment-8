import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";
import ProductContextProvider from "../context/ProductContext";

function Root() {
	return (
		<ProductContextProvider>
			<div className="prose max-w-none bg-slate-100 px-[1%]">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>{" "}
		</ProductContextProvider>
	);
}

export default Root;
