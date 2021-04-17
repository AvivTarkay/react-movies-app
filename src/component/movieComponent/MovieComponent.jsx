import React from "react";
import youtube from "../../images/youtube.png";

const Images_Api = "https://images.tmdb.org/t/p/w1280";

function voteAvg(rate) {
	if (rate >= 8) return "Green";
	else if (rate >= 6) return "Orange";
	else return "Red";
}

export default function MovieComp(props) {
	const {
		overview,
		// popularity,
		poster_path,
		// release_date,
		title,
		vote_average,
		name,
		trailer,
		// first_air_date,
	} = props;
	console.log(trailer);
	return (
		<div className="movies">
			<img
				src={poster_path ? `${Images_Api}${poster_path}` : "./defaultIMG.jpeg"}
				alt={title || name}
				className="mainImg"
			/>
			<div className="movie-info">
				<h4>{title || name}</h4>
				<span className={`tag ${voteAvg(vote_average)}`}>{vote_average}</span>
			</div>
			<div className="movie_review">
				<a
					href={`https://www.youtube.com/watch?v=${trailer[0]?.key}`}
					target="_blank"
					rel="noreferrer"
				>
					<img src={youtube} alt="Youtube" className="youtube" />
				</a>

				<p>{overview}</p>
			</div>
		</div>
	);
}
