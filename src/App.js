import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Action: [
    { name: "Black Panther", rating: "96%" },
    { name: "Avengers: Endgame", rating: "94%" },
    { name: "Mission: Impossible - Fallout", rating: "97%" }
  ],

  Horror: [
    { name: "Get Out", rating: "98%" },
    {
      name: "The Cabinet of Dr. Caligari (Das Cabinet des Dr. Caligari)",
      rating: "99%"
    },
    { name: "A Quiet Place", rating: "96%" }
  ],

  Adventure: [
    { name: "Wonder Woman", rating: "93%" },
    { name: "Star Wars: The Last Jedi", rating: "91%" },
    { name: "Seven Samurai (Shichinin no Samurai)", rating: "100%" }
  ],

  Anime: [
    { name: "Inside Out", rating: "98%" },
    { name: "Incredibles 2", rating: "93%" },
    { name: "Zootopia", rating: "98%" }
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
      <p style={{ fontSize: "smaller", textAlign: "center" }}>
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
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
