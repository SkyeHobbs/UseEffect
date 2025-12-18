import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState([0, 20]);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  useEffect(() => {
    setShowButton(page[0] === 0);
  }, [page]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${page[1]}&offset=${page[0]}`
      );
      if (!response.ok) {
        throw new Error("There was en error");
      }

      const data = await response.json();
      console.log(data.results);
      setCharacters(data.results);
    } catch (e) {
      console.error("Error:", e);
    }
  };

  const onClickNext = () => {
    if (page[0] < 1025) {
      setPage((prev) => [prev[0] + 20, prev[1]]);
    } else {
      setPage([0, 20]);
    }
  };
  const onClickBack = () => {
    console.log(page);
    setPage((prev) => [prev[0] - 20, prev[1]]);
  };

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      <div className="main-container ">
        <div>
          <div>
            <Cards characters={characters} />
            <button disabled={showButton} onClick={onClickBack}>Back</button>
            <button onClick={onClickNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;