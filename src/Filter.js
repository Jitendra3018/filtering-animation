import { useEffect } from "react";

export default function Filter({
	setActiveGenre,
	activeGenre,
	setFiltered,
	popular,
}) {
	useEffect(() => {
		// console.log("hello");
		if (activeGenre === 0) {
			setFiltered(popular);
			return;
		}

		const filtered = popular.filter((movie) =>
			movie.genre_ids.includes(activeGenre)
		);
		setFiltered(filtered);
	}, [activeGenre]);

	return (
		<div className="filterContainer">
			<button
				className={activeGenre === 0 ? "active" : ""}
				onClick={() => setActiveGenre(0)}
			>
				All
			</button>
			<button
				className={activeGenre === 28 ? "active" : ""}
				onClick={() => setActiveGenre(28)}
			>
				Action
			</button>
			<button
				className={activeGenre === 12 ? "active" : ""}
				onClick={() => setActiveGenre(12)}
			>
				Adventure
			</button>
			<button
				className={activeGenre === 16 ? "active" : ""}
				onClick={() => setActiveGenre(16)}
			>
				Animation
			</button>
			<button
				className={activeGenre === 35 ? "active" : ""}
				onClick={() => setActiveGenre(35)}
			>
				Comedy
			</button>
			<button
				className={activeGenre === 10402 ? "active" : ""}
				onClick={() => setActiveGenre(10402)}
			>
				Music
			</button>
			<button
				className={activeGenre === 18 ? "active" : ""}
				onClick={() => setActiveGenre(18)}
			>
				Drama
			</button>
			<button
				className={activeGenre === 10749 ? "active" : ""}
				onClick={() => setActiveGenre(10749)}
			>
				Romance
			</button>
			<button
				className={activeGenre === 878 ? "active" : ""}
				onClick={() => setActiveGenre(878)}
			>
				Science Fiction
			</button>
		</div>
	);
}
