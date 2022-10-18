import { useEffect, useContext, useRef } from "react";
import { ReactComponent as Search } from "../images/Search.svg";
import { ReactComponent as Close } from "../images/Close.svg";

import InputsContext from "../context/InputsContext";
import CountryContext from "../context/CountryContext";

function SeachInput() {
	const { search, setSearch, setRegion, isShowing, setIsShowing, region } = useContext(InputsContext);
	const { data, setCountries } = useContext(CountryContext);

	const inputRef = useRef();

	useEffect(() => {
		isShowing && setIsShowing(false);
		if (!region) {
			const filter = data.filter((country) => country.name.common.toLowerCase().includes(search));
			setCountries(filter);
		}
	}, [search]);

	return (
		<div className="input-wrapper">
			<div className="search-input" onClick={() => inputRef.current.focus()}>
				<Search />
				<input
					ref={inputRef}
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
	);
}

export default SeachInput;
