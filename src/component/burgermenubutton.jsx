import { FaHamburger } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

export default function BurgerMenuButton({ burgerMenuOpen, setBurgerMenuOpen }) {
	const style = {
		button: {
			border: "none",
			background: "none",
			cursor: "pointer",
		}
	}
	
	return (
		<button style={style.button} onClick={() => setBurgerMenuOpen(prevState => !prevState)}>
			{burgerMenuOpen ? <GrClose/> : <FaHamburger />}
		</button>
	)
}