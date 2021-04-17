import React, { useContext } from "react";
import { movieContext } from "../MoviesState";

const SiteNavLinks = ({ btnText }) => {
	const { setHiddenMenu, activeLink, setActiveLink } = useContext(movieContext);
	return (
		<button
			onClick={() => {
				setActiveLink(btnText);
				setHiddenMenu(true);
			}}
			style={{ color: activeLink === btnText ? "#024edd" : "#fff" }}
			className="btnStyle"
		>
			{btnText}
		</button>
	);
};

export default SiteNavLinks;
