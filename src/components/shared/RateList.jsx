const RateList = ({ rate, handleChange, selected }) => {
	//sebelumnya naruh state selected sama handleChange di sini malah error buttonnya, harus diklik dua kali baru ganti style
	// const [selected, setSelected] = useState(0)
	// const handleChange = (e) => {
	//setSelected(+e.target.value)
	//select(+e.target.value) ini dari FeedbackForm
	// }

	//LALU KUPINDAH KE RATINGSELECT.JSX biar passing lewat props, soalnya nilai rate juga dari sana
	return (
		<li>
			<input
				type="radio"
				id={`num${rate}`}
				name="rating"
				value={rate} //
				onChange={handleChange}
				checked={selected === rate}
			/>
			<label htmlFor={`num${rate}`}>{rate}</label>
		</li>
	);
};

export default RateList;
