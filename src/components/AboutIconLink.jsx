import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const AboutIconLink = () => {
	return (
		//PAKAI LINK DARIPADA A TAG AGAR DI CLIENT SIDE TIDAK REFRESH PAGE
		<div className="about-link">
			<Link
				to={{
					pathname: "/about",
				}}
			>
				<FaQuestion size={30} />
			</Link>
		</div>
	);
};

export default AboutIconLink;
