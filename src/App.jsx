import React from "react";
import MySite from "./component/Reusable_components/MySite";
import { MoviesState } from "./component/MoviesState";
import "./App.scss";
require("dotenv").config();

export default function App() {
	return (
		<MoviesState>
			<MySite />
		</MoviesState>
	);
}
