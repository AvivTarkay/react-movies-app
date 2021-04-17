import React, { useContext } from "react";
import { movieContext } from "../MoviesState";
import SiteNavLinks from "./SiteNavLinks";

const SiteNavMenu = () => {
	const { hiddenMenu } = useContext(movieContext);
	return (
		<div className={(hiddenMenu ? "hidden" : "") + "SiteNavMenu"}>
			<SiteNavLinks btnText="Popular-Movies" />
			<SiteNavLinks btnText="Popular-TvShows" />
		</div>
	);
};

export default SiteNavMenu;
