import { useContext, useRef } from "react";
import { formatNumber } from "../helpers";

import CountryContext from "../context/CountryContext";
import { useEffect, useState } from "react";

function DetailPage() {
	const { data, selectedCountry, setSelectedCountry } = useContext(CountryContext);
	const [borders, setBorders] = useState([]);

	const detailPageRef = useRef();

	useEffect(() => {
		if (selectedCountry.borders) {
			setBorders([]);
			selectedCountry.borders.forEach((neighbor) => {
				setBorders((prev) => [...prev, ...data.filter((country) => country.cca3 === neighbor)]);
			});
		}
	}, [data, selectedCountry]);

	return (
		<div className="detail-page" ref={detailPageRef}>
			<div className="content-wrapper">
				<div
					className="button"
					onClick={() => {
						document.body.style.overflow = "auto";
						setSelectedCountry({});
					}}
				>
					Back
				</div>
				<div className="detail-page__sections">
					<div className="detail-page__flag">
						<img src={selectedCountry.flags.svg} alt={selectedCountry.flag} />
					</div>
					<div className="detail-page__details">
						<span className="detail-page__name">{selectedCountry.name.common}</span>
						<div className="detail-page__grid">
							{selectedCountry.name.nativeName && (
								<span>
									<strong>Native Name: </strong>
									{Object.values(selectedCountry.name.nativeName)
										.slice(0, 1)
										.map((name) => name.common)}
								</span>
							)}
							<span>
								<strong>Population: </strong>
								{formatNumber(selectedCountry.population)}
							</span>
							<span>
								<strong>Region: </strong>
								{selectedCountry.region}
							</span>
							{selectedCountry.subregion && (
								<span>
									<strong>Sub Region: </strong>
									{selectedCountry.subregion}
								</span>
							)}
							{selectedCountry.capital && (
								<span>
									<strong>Capital: </strong>
									{selectedCountry.capital.join(", ")}
								</span>
							)}
							{selectedCountry.tld && (
								<span>
									<strong>Top Level Domain: </strong>
									{selectedCountry.tld.join(", ")}
								</span>
							)}
							{selectedCountry.currencies && (
								<span>
									<strong>Currencies: </strong>
									{Object.values(selectedCountry.currencies)
										.map((currency) => currency.name)
										.join(", ")}
								</span>
							)}
							{selectedCountry.languages && (
								<span>
									<strong>Languages: </strong>
									{Object.values(selectedCountry.languages).join(", ")}
								</span>
							)}
						</div>
						{!!borders.length && (
							<span className="border-countries">
								<strong>Border Countries: </strong>
								<div className="border-countries__wrapper">
									{borders.map((country, index) => {
										return (
											<div
												className="border-countries__country"
												key={index}
												onClick={() => {
													setSelectedCountry(country);
													detailPageRef.current.scrollTo(0, 0);
												}}
											>
												<span>{country.name.common}</span>
											</div>
										);
									})}
								</div>
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailPage;
