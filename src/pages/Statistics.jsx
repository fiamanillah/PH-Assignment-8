import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LineBarChart from "../components/LineBarChart";

function Statistics() {
	const location = useLocation();

	useEffect(() => {
		document.title = "Statistics | Gadget Heaven";
	}, [location]);

	return (
		<section>
			<div className="bg-primary">
					<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto text-center text-white">
						<h1 className="text-white">Statistics</h1>
						<p className="text-white">
							Explore the latest gadgets that will take your experience to the next
							level. From smart devices to the coolest accessories, we have it all!
						</p>

					</div>
				</div>
			<div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto text-center text-white">
				<div className="overflow-x-scroll pb-5">
					<LineBarChart />
				</div>
			</div>
		</section>
	);
}

export default Statistics;
