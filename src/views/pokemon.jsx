import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PrimaryMenu from "../component/primary-menu"
export default function Pokemon() {
	const params = useParams()
	const [pokemon, setPokemon] = useState({})

	useEffect(function() {
		fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
			.then(res => res.json())
			.then(data => setPokemon(data))
	}, [])

	const style = {
		heading: {
			textTransform: "capitalize"
		}
	}

	return (
	
		<>
			<PrimaryMenu />
		<img src={pokemon.sprites?.front_default} alt="" />
			<h1 style={style.heading}>{pokemon.name}</h1>
			<p>{pokemon.base_experience}</p>
			<h2>Abilities</h2>
			<ul>
				{pokemon.abilities?.map(element => <li key={element.ability.name}>{element.ability.name}</li>)}
			</ul>
			<h2>Forms</h2>
			<ul>
				{pokemon.forms?.map(element => <li key={element.name}>{element.name}</li>)}
			</ul>
			<h2>moves</h2>
			<ul>
				{pokemon.moves?.map(element => <li key={element.move.name}>{element.move.name}</li>)}
			</ul>
		</>
		)
}
