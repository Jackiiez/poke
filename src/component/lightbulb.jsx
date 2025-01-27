export default function Lightbulb({ on }) {
	const bulb = {
		height: "200px",
		width: "200px",
		backgroundColor: on ? "hotpink" : "gray"
	}

	return (
		<div style={bulb}></div>
	)
}