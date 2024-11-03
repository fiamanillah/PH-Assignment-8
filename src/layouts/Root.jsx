import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";

function Root() {
	return (
		<div className="prose max-w-none bg-slate-100">
			<Header />
			<main >
				<Outlet />
			</main>
            <Footer/>
		</div>
	);
}

export default Root;
