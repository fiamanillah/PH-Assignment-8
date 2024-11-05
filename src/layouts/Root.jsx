import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";
import ProductContextProvider from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Flip } from "react-toastify";

function Root() {
	return (
		<ProductContextProvider>
			<CartProvider>
				<div className="prose max-w-none bg-slate-100 ">
					<Header />
					<main>
						<Outlet />
					</main>
					<Footer />
					<ToastContainer
						position="bottom-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						stacked
						pauseOnHover
						theme="colored"
						transition={Flip} 
					/>
				</div>
			</CartProvider>
		</ProductContextProvider>
	);
}

export default Root;
