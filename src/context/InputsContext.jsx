import { useState, createContext } from "react";

const InputsContext = createContext();

export function InputsProvider({ children }) {
	const [search, setSearch] = useState("");
	const [isShowing, setIsShowing] = useState(false);
	const [region, setRegion] = useState("");

	const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

	return <InputsContext.Provider value={{ search, setSearch, isShowing, setIsShowing, region, setRegion, regions }}>{children}</InputsContext.Provider>;
}

export default InputsContext;
