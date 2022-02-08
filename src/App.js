import { useEffect, useState } from "react";
import Movie from "./Movie";
import "./App.css";
import Filter from "./Filter";

export default function App() {
	const [popular, setPopular] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [activeGenre, setActiveGenre] = useState(0);

	useEffect(() => {
		fetchPopular();
	}, []);

	const fetchPopular = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=d7c3c1b7af42d6043e0729870317e71a&language=en-US&page=1"
		);
		const movies = await data.json();
		console.log(movies.results);

		setPopular(movies.results);
		setFiltered(movies.results);
	};

	return (
		<div className="App">
			<Filter
				popular={popular}
				setFiltered={setFiltered}
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}
			/>
			<div className="popularMovies">
				{filtered.map((movie) => (
					<Movie key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
}
