import { useContext } from "react";
import "./styles/main.scss";

import ThemeContext from "./context/ThemeContext";
import CountryContext from "./context/CountryContext";

import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Grid from "./components/Grid";
import DetailPage from "./components/DetailPage";

function App() {
	const { theme } = useContext(ThemeContext);
	const { selectedCountry } = useContext(CountryContext);
	return (
		<div className={`App ${theme}`}>
			<Header />
			{Object.keys(selectedCountry).length ? <DetailPage /> : ""}
			<div className="page-content">
				<Inputs />
				<Grid />
			</div>
		</div>
	);
}

export default App;
