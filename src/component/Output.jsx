import React, { useContext } from "react";
import { movieContext } from "./MoviesState";
import Container from "../component/Reusable_components/Container";
import PopularMovies from "./PopularMovies";
import TvShowsPopular from "./TvShowsPopular";
import Pagination from "./movieComponent/Pagination";

export default function Output() {
	const { activeLink } = useContext(movieContext);
	return (
		<div className="outputApi">
			{activeLink === "Popular-Movies" && (
				<Container>
					<PopularMovies />
					<Pagination />
				</Container>
			)}
			{activeLink === "Popular-TvShows" && (
				<Container>
					<TvShowsPopular />
					<Pagination />
				</Container>
			)}
		</div>
	);
}
