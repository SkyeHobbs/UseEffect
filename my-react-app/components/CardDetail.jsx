const CardDetail = ({ character }) => {
  const typesString = character.types.map((item) => item.type.name).join(', ')
  console.log(character.sprites);

  return (
    <div className="card-detail">
      <h2>{character.name}</h2>
      <img src={character.sprites.front_default} display="none"></img>
      <p>Height: {character.height}</p>
      <p>Weight: {character.weight}</p>
      <p>Type: {typesString}</p>
    </div>
  );
};
export default CardDetail;
