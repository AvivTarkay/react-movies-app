import React, { useContext } from "react";
import { movieContext } from "../MoviesState";
import SiteNavLinks from "./SiteNavLinks";
import MenuListComposition from "./ToggleMenuGroup";

const SiteNavMenu = () => {
	const { hiddenMenu } = useContext(movieContext);
	return (
		<div className={(hiddenMenu ? "hidden" : "") + "SiteNavMenu"}>
			<SiteNavLinks btnText="Popular-Movies" />
			<SiteNavLinks btnText="Popular-TvShows" />
			<MenuListComposition />
		</div>
	);
};

export default SiteNavMenu;
