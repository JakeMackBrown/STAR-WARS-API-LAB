import { useEffect, useState } from 'react';
import axios from 'axios';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;