import { useState } from "react"
import BurgerMenu from "./burgermenu"
import BurgerMenuButton from "./burgermenubutton"

function PrimaryMenu() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

  return (
    <>
      <BurgerMenuButton
        burgerMenuOpen={burgerMenuOpen}
        setBurgerMenuOpen={setBurgerMenuOpen}
      />
      <BurgerMenu
        setBurgerMenuOpen={setBurgerMenuOpen}
        burgerMenuOpen={burgerMenuOpen}
      />
    </>
  )
}

export default PrimaryMenu
