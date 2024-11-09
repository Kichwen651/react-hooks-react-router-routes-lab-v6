import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Example static data (replace this with actual API or imported data in a real app)
const data = {
  movies: [
    { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
    { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"] },
    { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"] }
  ],
  actors: [
    { id: 1, name: "Benedict Cumberbatch", movies: ["Doctor Strange", "The Imitation Game", "Black Mass"] },
    { id: 2, name: "Justin Timberlake", movies: ["Trolls", "Friends with Benefits", "The Social Network"] },
    { id: 3, name: "Anna Kendrick", movies: ["Pitch Perfect", "Into The Wood"] },
    { id: 4, name: "Tom Cruise", movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"] }
  ],
  directors: [
    { id: 1, name: "Scott Derrickson", movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"] },
    { id: 2, name: "Mike Mitchell", movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"] },
    { id: 3, name: "Edward Zwick", movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"] }
  ]
};

function Movie() {
  const { id } = useParams(); // Get the 'id' from the URL
  const [movie, setMovie] = useState(null); // Store the movie data
  const [actors, setActors] = useState([]); // Store the actors related to the movie
  const [director, setDirector] = useState(null); // Store the director related to the movie
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    console.log("Fetching movie data for id:", id); // Debugging the 'id'
    const selectedMovie = data.movies.find((movie) => movie.id === parseInt(id));

    if (selectedMovie) {
      setMovie(selectedMovie);

      const relatedActors = data.actors.filter((actor) => actor.movies.includes(selectedMovie.title));
      setActors(relatedActors);

      const relatedDirector = data.directors.find((director) => director.movies.includes(selectedMovie.title));
      setDirector(relatedDirector);

      setLoading(false); // Set loading to false after fetching the data
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time} min</p>
        <div>
          <p>Genres:</p>
          {movie.genres.map((genre, index) => (
            <span key={index} className="genre">{genre}</span>
          ))}
        </div>

        <section>
          <h2>Actors:</h2>
          {actors.length > 0 ? (
            <ul>
              {actors.map((actor) => (
                <li key={actor.id}>{actor.name}</li>
              ))}
            </ul>
          ) : (
            <p>No actors found for this movie.</p>
          )}
        </section>

        <section>
          <h2>Director:</h2>
          {director ? (
            <p>{director.name}</p>
          ) : (
            <p>No director found for this movie.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Movie;
