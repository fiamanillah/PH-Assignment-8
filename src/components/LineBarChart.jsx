import { useContext } from "react";
import {
	ComposedChart,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { ProductContext } from "../context/ProductContext";

function LineBarChart() {
	const { products } = useContext(ProductContext);

	if (!products || products.length === 0) {
		return <p>Loading data...</p>;
	}

	const chartData = products.map((product) => ({
		product_id: product.product_id,
		product_title: product.product_title,
		price: product.price,
		rating: product.rating,
	}));

	return (
		<div style={{ width: "5000px", height: "600px" }}>
			<ResponsiveContainer>
				<ComposedChart
					data={chartData}
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20,
					}}
				>
					<CartesianGrid stroke="#f5f5f5" />
					<XAxis 
						dataKey="product_title" 
						scale="band" 
						angle={-30} 
						textAnchor="end" 
						interval={0} 
					/>
					<YAxis />
					<Tooltip />
					<Legend />
					<Area 
						type="monotone" 
						dataKey="price" 
						fill="#8884d8" 
						stroke="#8884d8" 
					/>
					<Bar 
						dataKey="price" 
						barSize={20} 
						fill="#413ea0" 
						name="Price" 
					/>
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
}

export default LineBarChart;
