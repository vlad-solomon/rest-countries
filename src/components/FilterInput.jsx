import { useContext } from "react";

import { ReactComponent as Close } from "../images/Close.svg";
import { ReactComponent as Expand } from "../images/Expand.svg";

import InputsContext from "../context/InputsContext";
import CountryContext from "../context/CountryContext";

function FilterInput() {
	const { setSearch, isShowing, setIsShowing, region, setRegion, regions } = useContext(InputsContext);
	const { data, setCountries } = useContext(CountryContext);
	return (
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
	);
}

export default FilterInput;
