import RateList from "./shared/RateList";

const RatingSelect = ({ select, selected, setSelected }) => {
	//TADINYA state selected sama handleChange ini ada di RATELIST.JSX dan errornya tombol harus diklik dua kali dan nilai rating yang sama tidak muncul lagi di console apabila sudah diklik sebelumnya

	const handleChange = (e) => {
		setSelected(+e.target.value);
		select(+e.target.value);
		console.log(e.target.value);
	};

	let rows = [];
	for (var i = 1; i < 11; i++) {
		rows.push(
			<RateList
				select={select}
				rate={i}
				selected={selected}
				handleChange={handleChange}
			/>
		);
	}

	return <ul className="rating">{rows}</ul>;
};

export default RatingSelect;
