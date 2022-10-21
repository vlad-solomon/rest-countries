import { useContext } from "react";
import Card from "./Card";

import CountryContext from "../context/CountryContext";
import InputsContext from "../context/InputsContext";

function Grid() {
	const { countries } = useContext(CountryContext);
	const { search } = useContext(InputsContext);

	return (
		<>
			{countries.length ? (
				<div className="grid">
					{countries.map((country, index) => {
						return <Card key={index} country={country} />;
					})}
				</div>
			) : (
				<div className="grid--empty">
					<em>"{search}"</em> not found...
				</div>
			)}
		</>
	);
}

export default Grid;
