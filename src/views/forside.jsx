import {useEffect, useState } from "react"
import PrimaryMenu from "../component/primary-menu"
import { Link } from "react-router"
import Pokecard from "../component/pokecard"

export default function Forside() {
	const [pokemon, setPokemon] = useState({})
	useEffect(function(){
		fetch ("https://pokeapi.co/api/v2/pokemon")
		.then (res=> res.json())
		.then (data => setPokemon(data))
	}, [])
	return (
	
		<>
			<PrimaryMenu />
			<h1>Forside</h1>
			<ul><li><Link to="/pokemon/ditto">Ditto</Link></li></ul>


			<ul>{pokemon.results?.map(element =>(
				<li key={element.url}> <Pokecard name={element.name} url={element.url}></Pokecard></li>
				
			) )} </ul>
		</>
	)
}
