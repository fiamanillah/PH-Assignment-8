import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Statistics from "../pages/Statistics";
import Root from "../layouts/Root";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "category/:category",
				element: <App />,
			},
			{
				path: "product/:productid",
				element: <ProductDetails />,
			},
			{
				path: "statistics",
				element: <Statistics />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "contact", // New route for Contact Us
				element: <Contact />,
			},
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);


function AppRoutes() {
	return <RouterProvider router={routes}></RouterProvider>;
}

export default AppRoutes;
