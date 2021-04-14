import React, { useContext } from "react";
import { movieContext } from "../MoviesState";
import "./SearchNav.css";

export default function SearchNav() {
	const {
		searchMovie,
		searchTvShow,
		HandleOnSubmit,
		HandlerOnChange,
	} = useContext(movieContext);
	return (
		<form onSubmit={HandleOnSubmit} className="formSubmit">
			<input
				className="searchNav"
				type="text"
				placeholder="search..."
				value={searchTvShow}
				onChange={HandlerOnChange}
			/>
		</form>
	);
}
