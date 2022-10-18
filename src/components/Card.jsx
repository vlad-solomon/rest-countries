import { useContext } from "react";
import { formatNumber } from "../helpers";

import CountryContext from "../context/CountryContext";

function Card({ country }) {
	const { setSelectedCountry } = useContext(CountryContext);
	return (
		<div
			className="card"
			onClick={() => {
				document.body.style.overflow = "hidden";
				setSelectedCountry(country);
			}}
		>
			<div className="card__flag">
				<img src={country.flags.png} alt={country.flag} />
			</div>
			<div className="card__details">
				<span className="card__name">{country.name.common}</span>
				<span className="card__stat">
					<strong>Population:</strong> {formatNumber(country.population)}
				</span>
				<span className="card__stat">
					<strong>Region:</strong> {country.region}
				</span>
				{country.capital && (
					<span className="card__stat">
						<strong>Capital:</strong> {country.capital.join(", ")}
					</span>
				)}
			</div>
		</div>
	);
}

export default Card;
