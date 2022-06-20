import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from "react-router-dom";
import Card from "./components/shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
	return (
		//<Router> adl tag untuk menggunakan/menjalankan react-router-dom
		<FeedbackProvider>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						/>
						<Route path="/about/*" element={<AboutPage />} />
						<Route path="/post/:id/:name" element={<Post />} />
					</Routes>
					{/* <Card>
						<NavLink to="/" activeclassname="active">
							Home
						</NavLink>
						<NavLink to="/about" activeclassname="active">
							About
						</NavLink>
					</Card>
					<AboutIconLink /> */}
				</div>
				{/* tag <Route> ketika Anda akan membuat URL Router */}
			</Router>
		</FeedbackProvider>
	);
};

export default App;
