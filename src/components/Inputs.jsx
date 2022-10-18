import { useState, useEffect, useContext } from "react";
import { ReactComponent as Search } from "../images/Search.svg";
import { ReactComponent as Close } from "../images/Close.svg";
import { ReactComponent as Expand } from "../images/Expand.svg";

import CountryContext from "../context/CountryContext";

function Inputs() {
	const [search, setSearch] = useState("");
	const { data, setCountries } = useContext(CountryContext);
	const [isShowing, setIsShowing] = useState(false);

	const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
	const [region, setRegion] = useState("");

	useEffect(() => {
		isShowing && setIsShowing(false);
		if (!region) {
			const filter = data.filter((country) => country.name.common.toLowerCase().includes(search));
			setCountries(filter);
		}
	}, [search]);

	return (
		<div className="inputs">
			<div className="input-wrapper">
				<div className="search-input">
					<Search />
					<input
						autoComplete="new-password"
						type="text"
						placeholder="Search for a country..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value.toLowerCase());
							setRegion("");
						}}
					/>
				</div>
				{search && (
					<div
						className="clear-input"
						onClick={() => {
							setSearch("");
							setCountries(data);
						}}
					>
						<Close />
					</div>
				)}
			</div>
			<div className="input-wrapper">
				{region && (
					<div
						className="clear-input"
						onClick={() => {
							setIsShowing(false);
							setRegion("");
							setCountries(data);
						}}
					>
						<Close />
					</div>
				)}
				<div
					className="filter-input"
					onClick={() => {
						setIsShowing((prev) => !prev);
					}}
				>
					<span>{region ? region : "Filter by region"}</span>
					<Expand />
					{isShowing && (
						<div className="filter-input__options">
							{regions
								.filter((worldRegion) => worldRegion !== region)
								.map((region) => {
									return (
										<div
											className="filter-input__option"
											key={region}
											onClick={() => {
												setSearch("");
												setRegion(region);
												setCountries(data.filter((country) => country.region === region));
											}}
										>
											{region}
										</div>
									);
								})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Inputs;
