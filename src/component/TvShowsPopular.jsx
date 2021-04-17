import React, { useContext } from "react";
import { movieContext } from "./MoviesState";
import Container from "./Reusable_components/Container";
import MovieComp from "./movieComponent/MovieComponent";
import Loader from "./Reusable_components/Loader";

export default function TvPopular() {
	const { popularTvShow, pageLoading, seriesTrailer } = useContext(
		movieContext
	);
	console.log("TvPopular =>seriesTrailer ", seriesTrailer);
	return (
		<div className="popularTvShows">
			<Container>
				{popularTvShow.length === 0 && (
					<h1 className="error">Results not found</h1>
				)}
				{!pageLoading ? (
					popularTvShow.length > 0 &&
					React.Children.toArray(
						popularTvShow.map(tvShow => {
							return <MovieComp {...tvShow} />;
						})
					)
				) : (
					<Loader />
				)}
			</Container>
		</div>
	);
}
