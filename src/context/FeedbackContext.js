import { createContext, useState } from "react";
import { v4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			rating: 10,
			text: "This is feedback item 1 coming from the backend",
		},
		{
			id: 2,
			rating: 8,
			text: "This is feedback item 2 coming from the backend",
		},
		{
			text: "This is feedback item 3 coming from the backend",
			rating: 10,
			id: 3,
		},
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const deleteFeedback = (id) => {
		if (window.confirm(`Are you sure you want to delete?`)) {
			setFeedback((prevState) => prevState.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = v4();
		setFeedback((prevState) => [newFeedback, ...prevState]);
		console.log(newFeedback);
	};

	//set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};

	const updateFeedback = (id, updatedItem) => {
		// const newItem = feedback.filter((item) => item.id !== id);
		// setFeedback([updatedItem, ...newItem]);

		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
				feedbackEdit,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
