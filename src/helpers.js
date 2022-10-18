export function formatNumber(int) {
	return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
