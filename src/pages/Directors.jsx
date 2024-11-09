import { useState, useEffect } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // This data can be fetched from an API, but for now we have it statically.
    const directorsData = [
      { id: 1, name: "Scott Derrickson", movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"] },
      { id: 2, name: "Mike Mitchell", movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"] },
      { id: 3, name: "Edward Zwick", movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"] }
    ];

    setDirectors(directorsData);
  }, []);

  return (
    <>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.length > 0 ? (
          directors.map((director) => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>Loading directors...</p>
        )}
      </main>
    </>
  );
}

export default Directors;
