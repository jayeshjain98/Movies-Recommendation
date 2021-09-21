import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Action: [
    { name: "Black Panther", rating: "96%", description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past." },
    { name: "Avengers: Endgame", rating: "94%", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."},
    { name: "Mission: Impossible - Fallout", rating: "97%", description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong." }
  ],

  Horror: [
    { name: "Get Out", rating: "98%", description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point." },
    {
      name: "The Cabinet of Dr. Caligari (Das Cabinet des Dr. Caligari)",
      rating: "99%",
      description: "When young Jane Lindstorm's (Glynis Johns) car breaks down, she makes her way to a somewhat frightening-looking mansion for help. Once there, however, her problems go from bad worse."
    },
    { name: "A Quiet Place", rating: "96%", description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing." }
  ],

  Adventure: [
    { name: "Wonder Woman", rating: "93%", description: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny." },
    { name: "Star Wars: The Last Jedi", rating: "91%", description: "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past." },
    { name: "Seven Samurai (Shichinin no Samurai)", rating: "100%", description: "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves." }
  ],

  Anime: [
    { name: "Inside Out", rating: "98%", description: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school." },
    { name: "Incredibles 2", rating: "93%", description: "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world." },
    { name: "Zootopia", rating: "98%", description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy." }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 id="heading-text"> 🎥 Best Movies </h1>
      <p style={{ fontSize: "15px", textAlign: "center" }}>
        Movies I Like the most. Select a genre to get started
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              backgroundColor: "#fb923c",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "#fb923c"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller", flexDirection: "row" }}>Rotten Tomatoes</div>
              <div style={{ fontSize: "smaller", flexDirection: "row" }}> {movie.rating} </div>
              <div style={{ fontSize: "smaller", marginTop: 10}}> Description: {movie.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

