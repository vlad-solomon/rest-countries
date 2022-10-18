import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import { CountryProvider } from "./context/CountryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<CountryProvider>
				<App />
			</CountryProvider>
		</ThemeProvider>
	</React.StrictMode>
);
