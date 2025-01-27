export default function Switch({ setOn }) {
	function handleClick(event) {
		setOn(on => !on)
	}

	return (
		<button onClick={handleClick}>Klik</button>
	)
}