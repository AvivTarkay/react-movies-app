import React, { useContext } from "react";
import { movieContext } from "../MoviesState";
import Container from "./Container";
import SiteNavMenu from "./SiteNavMenu";
import SearchNav from "../movieComponent/SearchNav";
import "./SiteNavigation.css";

const SiteNavigation = () => {
	const { hiddenMenu, setHiddenMenu } = useContext(movieContext);
	return (
		<nav>
			<div className="wrapper">
				<SiteNavMenu />

				<SearchNav />
				<i
					onClick={() => setHiddenMenu(!hiddenMenu)}
					id="burgerMenu"
					className={hiddenMenu ? "fa fa-bars" : "fa fa-times"}
				></i>
			</div>
		</nav>
	);
};

export default SiteNavigation;
