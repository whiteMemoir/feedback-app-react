import { useContext, useState, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext);
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
			setSelected(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleText = (e) => {
		if (e.target.value === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (e.target.value !== "" && e.target.value.trim().length < 10) {
			setBtnDisabled(true);
			setMessage("Text must be at least 10 characters!");
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}

		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length >= 10) {
			const newFeedback = {
				text,
				rating,
			};
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}
		}

		setRating(10);
		setSelected(0);
		setBtnDisabled(true);
		setText("");
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate our service?</h2>
				<RatingSelect
					selected={selected}
					setSelected={setSelected}
					select={(rating) => setRating(rating)}
				/>
				<div className="input-group">
					<input
						onChange={handleText}
						type="text"
						placeholder="Write a review"
						value={text}
					/>
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
