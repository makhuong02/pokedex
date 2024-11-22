import { useState } from "react";
import Header from "./components/Header";
import PokeCard from "./components/PokeCard";
import SideNav from "./components/SideNav";

function App() {
	const [selectedPokemon, setSelectedPokemon] = useState(0);
	const [showSideMenu, setShowSideMenu] = useState(false);

	function handleToggleMenu() {
		setShowSideMenu(!showSideMenu);
	}

	function handleCloseMenu() {
		setShowSideMenu(false);
	}

	return (
		<>
			<Header handleToggleMenu={handleToggleMenu} />
			<SideNav
				selectedPokemon={selectedPokemon}
				setSelectedPokemon={setSelectedPokemon}
				handleToggleMenu={handleToggleMenu}
				showSideMenu={showSideMenu}
				handleCloseMenu={handleCloseMenu}
			/>
			<PokeCard selectedPokemon={selectedPokemon} />
		</>
	);
}

export default App;
