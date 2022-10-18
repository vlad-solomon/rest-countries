import { useContext } from "react";
import { ReactComponent as Moon } from "../images/Moon.svg";
import { ReactComponent as MoonFill } from "../images/MoonFill.svg";

import ThemeContext from "../context/ThemeContext";

function Header() {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div className="header">
			<div className="header__inner">
				<span className="header__logo">Where in the world?</span>
				<div className="header__theme-toggle" onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}>
					{theme === "light" ? <Moon /> : <MoonFill />}
					Dark Mode
				</div>
			</div>
		</div>
	);
}

export default Header;
