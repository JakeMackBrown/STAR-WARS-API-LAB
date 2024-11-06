import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then(response => setCharacter(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return character ? (
    <div className="detail">
      <h2>Name: {character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <Link to="/characters">Return to characters list</Link>
    </div>
  ) : (
    <h3>Finding character...</h3>
  );
};

export default CharacterPage;