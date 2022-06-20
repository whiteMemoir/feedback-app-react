import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h1>Hello</h1>
				<p>halo</p>
				<p>versi 1</p>
				<Routes>
					<Route path="/show" element={<h1>Haiii</h1>}></Route>
				</Routes>
				<p>
					<Link to="/">Back to Home</Link>
				</p>
			</div>
		</Card>
	);
};

export default AboutPage;
