import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
	const location = useLocation();

	useEffect(() => {
		document.title = "Dashboard";
	}, [location]);

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
}

export default Dashboard;
