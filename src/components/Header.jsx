import React from "react";

export default function Header(props) {
	const { handleToggleMenu } = props;

	return (
		<header>
			<button className="open-nav-button" onClick={handleToggleMenu}>
				<i class="fa-solid fa-bars"></i>
			</button>
			<h1 className="text-gradient">Pokédex</h1>
		</header>
	);
}