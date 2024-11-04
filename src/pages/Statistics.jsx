import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Statistics() {
	const location = useLocation();

	useEffect(() => {
		document.title = "Statistics";
	}, [location]);

	return (
		<div>
			<h1>Statistics</h1>
		</div>
	);
}

export default Statistics;
