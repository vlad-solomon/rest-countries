import { useContext } from "react";
import "./styles/main.scss";

import ThemeContext from "./context/ThemeContext";
import CountryContext from "./context/CountryContext";

import { InputsProvider } from "./context/InputsContext";

import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Grid from "./components/Grid";
import DetailPage from "./components/DetailPage";
import Loading from "./components/Loading";

function App() {
	const { theme } = useContext(ThemeContext);
	const { data, selectedCountry } = useContext(CountryContext);
	return (
		<div className={`App ${theme}`}>
			<Header />
			{Object.keys(selectedCountry).length ? <DetailPage /> : ""}
			{data.length ? (
				<div className="page-content">
					<InputsProvider>
						<Inputs />
						<Grid />
					</InputsProvider>
				</div>
			) : (
				<Loading theme={theme} />
			)}
		</div>
	);
}

export default App;
