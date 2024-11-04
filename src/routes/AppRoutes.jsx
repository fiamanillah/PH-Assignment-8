import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Statistics from "../pages/Statistics";
import Root from "../layouts/Root";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";

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
		],
	},
]);

function AppRoutes() {
	return <RouterProvider router={routes}></RouterProvider>;
}

export default AppRoutes;
