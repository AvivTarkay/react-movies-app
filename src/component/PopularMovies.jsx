import React, { useContext } from "react";
import { movieContext } from "./MoviesState";
import Container from "./Reusable_components/Container";
import MovieComp from "./movieComponent/MovieComponent";
import Loader from "./Reusable_components/Loader";

export default function Popular() {
	const { popularMovies, trailersKey, pageLoading } = useContext(movieContext);

	return (
		<Container>
			{popularMovies.length === 0 && (
				<h1 className="error">Results not found</h1>
			)}
			{!pageLoading ? (
				popularMovies.length > 0 &&
				popularMovies.map((movie, i) => {
					return (
						<MovieComp key={movie.id} {...movie} trailer={trailersKey[i]} />
					);
				})
			) : (
				<Loader />
			)}
		</Container>
	);
}
