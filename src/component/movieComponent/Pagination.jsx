import React, { useContext } from "react";
import { movieContext } from "../MoviesState";
// import "./Pagination.css";
import Container from "../Reusable_components/Container";

const MoviePagination = () => {
	const { newPage, currentPage, showPagination } = useContext(movieContext);
	return (
		<div className="moviePagination">
			{showPagination && (
				<Container>
					<button
						className="directionBtn"
						style={{
							cursor: currentPage !== 1 ? "pointer" : "not-allowed",
							background: currentPage !== 1 ? "#024edd" : "#303847",
						}}
						onClick={() => newPage("previous")}
					>
						Prev Page
					</button>
					<button onClick={() => newPage("next")}>Next Page</button>
				</Container>
			)}
		</div>
	);
};

export default MoviePagination;
