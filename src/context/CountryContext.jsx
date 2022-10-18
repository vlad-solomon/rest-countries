import { useState, createContext, useEffect } from "react";

const CountryContext = createContext();

export function CountryProvider({ children }) {
	const [data, setData] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState({});
	const [countries, setCountries] = useState([]);

	async function fetchCountries() {
		const response = await fetch("https://restcountries.com/v3.1/all");
		const data = await response.json();
		return data;
	}

	useEffect(() => {
		fetchCountries()
			.then((data) => {
				data.sort((a, b) => {
					const countryA = a.name.common.toLowerCase();
					const countryB = b.name.common.toLowerCase();
					return countryA.localeCompare(countryB, "en");
				});
				return data;
			})
			.then((data) => {
				setData(data);
				setCountries(data);
			});
	}, []);

	return <CountryContext.Provider value={{ data, countries, setCountries, selectedCountry, setSelectedCountry }}>{children}</CountryContext.Provider>;
}

export default CountryContext;
