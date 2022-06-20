import {
	useParams,
	Navigate,
	useNavigate,
	Routes,
	Route,
} from "react-router-dom";

const Post = () => {
	const params = useParams();
	const status = 404;
	const navigate = useNavigate();
	const onclick = () => {
		console.log("Hello");
		navigate("/about");
	};
	if (status === 404) {
		return <Navigate to="/notfound" />;
	}
	console.log(params);
	return (
		<div>
			<h1>Post {params.id}</h1>
			<p>Name: {params.name}</p>
			<button onClick={onclick}>Click</button>
		</div>
	);
};

export default Post;
