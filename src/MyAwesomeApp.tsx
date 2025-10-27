import React, { CSSProperties } from "react";

export default function MyAwesomeApp() {
  const fristName = "Leandro";
  const lastName = "Mortarini";

  const FavoriteGame = [
    "juego 1",
    "juego 2",
    "juego 3",
    "juego 4",
    "juego 5",
    "juego 6",
  ];

  const isActive = false;

  const address = {
    zipCode: "ABC-123",
    country: "Argentina",
  };

  const myStyles: CSSProperties = {
    backgroundColor: "#053b50",
    padding: 10,
    borderRadius: 10,
    color: "white",
  };

  return (
    <div>
      <h1>{fristName + lastName}</h1>

      <h2>{FavoriteGame.join(", ")} </h2>

      <p>Activo: {isActive ? "Si" : "No"}</p>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
  );
}
