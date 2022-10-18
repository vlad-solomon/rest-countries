import { useContext } from "react";
import Card from "./Card";

import CountryContext from "../context/CountryContext";

function Grid() {
	const { data, countries } = useContext(CountryContext);

	return (
		<div className="grid">
			{data.length
				? countries.length
					? countries.map((country, index) => {
							return <Card key={index} country={country} />;
					  })
					: "Country not found!"
				: "Loading countries..."}
		</div>
	);
}

export default Grid;
