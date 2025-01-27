import BurgerMenuButton from "./burgermenubutton"
import { Link } from "react-router"

export default function BurgerMenu({ burgerMenuOpen, setBurgerMenuOpen }) {

	const style = {
		section: {
			backgroundColor: "forestgreen",
			padding: "2rem 1rem",
			transform: burgerMenuOpen ? "translateX(0%)" : "translateX(-100%)",
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			transition: "transform 200ms ease-out"
		},
		link: {
			color: "white"
		}
	}

	return (
		<section style={style.section}>
			<h2>Menu</h2>
			<BurgerMenuButton
				burgerMenuOpen={burgerMenuOpen}
				setBurgerMenuOpen={setBurgerMenuOpen}
			/>
			<nav onClick={()=> setBurgerMenuOpen(prevState => !prevState)}>
				<ul>
					<li><Link to="/" style={style.link}>Forside</Link></li>
					<li><Link to="/kontakt" style={style.link}>Kontakt</Link></li>
				</ul>
			</nav>
		</section>
	)
}