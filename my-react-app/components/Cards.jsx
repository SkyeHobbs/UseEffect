import {useState } from "react";
import CardDetail from "./CardDetail";

const Cards = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState();

  const fetchCharacterById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/characters/${id}`);
      if (!response.ok) {
        throw new Error("Character not found");
      }
      const data = await response.json();
      setSelectedCharacter(data);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  return (
    <div className="cards">
      {characters.map((c, index) => (
        <div
          key={index}
          className="card"
          onClick={() => fetchCharacterById(c.id)}
        >
          {c.name}
        </div>
      ))}
      {selectedCharacter && <CardDetail character={selectedCharacter} />}
    </div>
  );
};
export default Cards;