import { useState, useEffect, createContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const hour = new Date();
		setTheme(hour <= 16 && hour >= 8 ? "light" : "dark");
	}, []);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
