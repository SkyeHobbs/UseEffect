import {useState } from "react";
import CardDetail from "./CardDetail";

const Cards = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState();

  const fetchCharacterById = async (url) => {
    try {
      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error("Character not found");
      }
      const data = await response.json();
      console.log(data)
      setSelectedCharacter(data);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  return (
    <>
      <div className="cards">
        {characters.map((c, index) => (
          <div
            key={index}
            className="card"
            onClick={() => fetchCharacterById(c.url)}
          >
            {c.name}
          </div>
        ))}
      </div>
      <div className="selected-card">
        {selectedCharacter && <CardDetail character={selectedCharacter} />}
      </div>
    </>
  );
};
export default Cards;