import { useState, useEffect } from "react";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Simulate fetching actor data (in a real app, this could come from an API)
    const actorsData = [
      { id: 1, name: "Benedict Cumberbatch", movies: ["Doctor Strange", "The Imitation Game", "Black Mass"] },
      { id: 2, name: "Justin Timberlake", movies: ["Trolls", "Friends with Benefits", "The Social Network"] },
      { id: 3, name: "Anna Kendrick", movies: ["Pitch Perfect", "Into The Wood"] },
      { id: 4, name: "Tom Cruise", movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"] }
    ];

    setActors(actorsData);
  }, []);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.length > 0 ? (
          actors.map((actor) => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>Loading actors...</p>
        )}
      </main>
    </>
  );
}

export default Actors;
