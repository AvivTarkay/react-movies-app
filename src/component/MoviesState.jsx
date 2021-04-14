import React, { useState, createContext, useEffect } from "react";

const api_key = "1241f3581f3481e4a98c83e83079d1e8";
const popularMovies_Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=`;
const SearchMovie_Api = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;
const SearchTVs_Api = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&&query=`;
const popularTv_Api = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=`;
//const latestMovies = `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US`;
//*&append_to_response=videos,images
// const topRatedTv =
// ("https://api.themoviedb.org/3/tv/top_rated?api_key=1241f3581f3481e4a98c83e83079d1e8&language=en-US&page=1");
// const upcoming_movies =
// ("https://api.themoviedb.org/3/movie/upcoming?api_key=1241f3581f3481e4a98c83e83079d1e8&language=en-US&page=1");

export const movieContext = createContext();

export const MoviesState = ({ children }) => {
	const [hiddenMenu, setHiddenMenu] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [activeLink, setActiveLink] = useState("Popular-Movies");
	const [popularMovies, setPopularMovies] = useState([]);
	const [popularTvShow, setPopularTvShow] = useState([]);
	const [searchMovie, setSearchMovie] = useState("");
	const [searchTvShow, setSearchTvShow] = useState("");
	const [pageLoading, setPageLoading] = useState(true);
	const [showPagination, setShowPagination] = useState(true);
	const [trailersKey, setTrailersKey] = useState([]);
	const [seriesTrailer, setSeriesTrailer] = useState([]);

	const getKeys = async (responseArray, trailerBegin, trailerEnd) => {
		const trailers = [];
		responseArray.forEach(async movie => {
			const res = await (
				await fetch(`${trailerBegin}${movie.id}${trailerEnd}`)
			).json();
			trailers.push(res.results[0]);
		});

		return trailers;
	};

	useEffect(() => {
		const getPopularMovies = async () => {
			const popularMoviesRes = await (
				await fetch(`${popularMovies_Api}${currentPage}`)
			).json();

			if (searchMovie.trim() === "") {
				setPopularMovies(popularMoviesRes.results);
				setShowPagination(true);
			}
			//* custom trailer url
			const trailerBegin = "https://api.themoviedb.org/3/movie/";
			const trailerEnd = `/videos?api_key=${api_key}&language=en-US`;
			//*

			//*getting trailers for movies
			const trailerKeysArray = await getKeys(
				popularMoviesRes.results,
				trailerBegin,
				trailerEnd
			);
			setTrailersKey(trailerKeysArray);
			//*
		};
		getPopularMovies();
	}, [searchMovie, currentPage]);

	useEffect(() => {
		const getPopularTvShows = async () => {
			const popularTvShowRes = await (
				await fetch(`${popularTv_Api}${currentPage}`)
			).json();

			if (searchTvShow.trim() === "") {
				setPopularTvShow(popularTvShowRes.results);
				setShowPagination(true);
			}

			//* custom trailer url
			const trailerBegin = "https://api.themoviedb.org/3/tv/";
			const trailerEnd = `/season/1/videos?api_key=${api_key}&language=en-US`;
			//*

			//* getting trailers for tvShows
			const trailerKeysArray = await getKeys(
				popularTvShowRes.results,
				trailerBegin,
				trailerEnd
			);
			setSeriesTrailer(trailerKeysArray);
			//*
		};
		getPopularTvShows();
	}, [searchTvShow, currentPage]);

	useEffect(() => {
		const pageLoading = setTimeout(() => {
			setPageLoading(false);
		}, 1300);
		return () => {
			clearTimeout(pageLoading);
		};
	}, [popularMovies, popularTvShow, currentPage]);

	async function HandleOnSubmit(e) {
		e.preventDefault();

		if (searchMovie.trim() === "" || searchTvShow.trim() === "") return;
		let searchResponse;
		activeLink === "Popular-Movies"
			? (searchResponse = await fetch(`${SearchMovie_Api}${searchMovie}`))
			: (searchResponse = await fetch(`${SearchTVs_Api}${searchTvShow}`));
		const searchData = await searchResponse.json();

		activeLink === "Popular-Movies"
			? setPopularMovies(searchData.results)
			: setPopularTvShow(searchData.results);
	}

	function HandlerOnChange(e) {
		setSearchMovie(e.target.value) || setSearchTvShow(e.target.value);
	}

	const newPage = direction => {
		if (direction === "next") {
			setCurrentPage(pageNum => pageNum + 1);
			setPageLoading(true);
		} else if (direction === "previous" && currentPage !== 1)
			setCurrentPage(pageNum => pageNum - 1);
	};

	return (
		<movieContext.Provider
			value={{
				hiddenMenu,
				setHiddenMenu,
				activeLink,
				setActiveLink,
				popularMovies,
				currentPage,
				setCurrentPage,
				searchMovie,
				searchTvShow,
				setSearchMovie,
				HandleOnSubmit,
				HandlerOnChange,
				popularTvShow,
				pageLoading,
				setPageLoading,
				showPagination,
				setShowPagination,
				newPage,
				trailersKey,
				setTrailersKey,
				seriesTrailer,
			}}
		>
			{children}
		</movieContext.Provider>
	);
};
