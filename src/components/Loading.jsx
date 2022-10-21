import { RotatingLines } from "react-loader-spinner";

function Loading({ theme }) {
	return (
		<div className="loading">
			<RotatingLines strokeColor={theme === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)"} strokeWidth="2" animationDuration="0.5" width="125" />
		</div>
	);
}

export default Loading;
