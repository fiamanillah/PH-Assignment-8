import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Statistics from "../pages/Statistics";
import Root from "../layouts/Root";
import Dashboard from "../pages/Dashboard";
const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <App /> },
			{ path: "statistics", element: <Statistics /> },
			{ path: "dashboard", element: <Dashboard /> },
		],
	},
]);

function AppRoutes() {
	return <RouterProvider router={routes}></RouterProvider>;
}

export default AppRoutes;
