import { useState, useEffect } from "react"; 
import MovieCard from "../components/MovieCard";  // If MovieCard is in src/components

function Home() {
  const [movies, setMovies] = useState([]);

  // Simulate fetching movie data or fetching from an API
  useEffect(() => {
    // This data can be replaced by a fetch request from an API
    const movieData = [
      { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
      { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"] },
      { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"] }
    ];
    
    setMovies(movieData);
  }, []); // Empty dependency array ensures this runs only once after the initial render.

  return (
    <>
      <header>
        <h1>Home Page</h1>
        {/* Add navigation or other header components here */}
      </header>
      <main>
        <section>
          <h2>Movies</h2>
          {movies.length > 0 ? (
            <div>
              {movies.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} title={movie.title} />
              ))}
            </div>
          ) : (
            <p>Loading movies...</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;
