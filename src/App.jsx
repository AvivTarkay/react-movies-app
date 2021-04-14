import React from "react";
import MySite from "./component/Reusable_components/MySite";
import { MoviesState } from "./component/MoviesState";
import "./App.scss";

export default function App() {
	return (
		<MoviesState>
			<MySite />
		</MoviesState>
	);
}
