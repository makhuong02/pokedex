import React, { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";

export default function SideNav(props) {
	const {
		selectedPokemon,
		setSelectedPokemon,
		showSideMenu,
		handleToggleMenu,
		handleCloseMenu,
	} = props;
	const [searchValue, setSearchValue] = useState("");

	const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
		if (getFullPokedexNumber(eleIndex).includes(searchValue)) {
			return true;
		}
		if (ele.toLowerCase().includes(searchValue.toLowerCase())) {
			return true;
		}
	});

	return (
		<nav className={" " + (showSideMenu ? "open" : "")}>
			<div className={"header " + (showSideMenu ? "open" : "")}>
				<button className="open-nav-button" onClick={handleCloseMenu}>
					<i class="fa-solid fa-arrow-left-long"></i>
				</button>
				<h1 className="text-gradient">Pokédex</h1>
			</div>
			<input
				placeholder="E.g. 001 or Bulba..."
				type="text"
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
			/>
			{filteredPokemon.map((pokemon, pokemonIndex) => {
				const truePokedexNumber = first151Pokemon.indexOf(pokemon);
				return (
					<button
						onClick={() => {
							setSelectedPokemon(truePokedexNumber);
							handleCloseMenu();
						}}
						key={pokemonIndex}
						className={
							"nav-card " +
							(pokemonIndex === selectedPokemon ? "nav-card-selected" : "")
						}
					>
						<p>{getFullPokedexNumber(truePokedexNumber)}</p>
						<p>{pokemon}</p>
					</button>
				);
			})}
		</nav>
	);
}