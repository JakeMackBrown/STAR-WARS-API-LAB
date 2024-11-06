import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="characters">
      <h2>List of Characters</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <Link to={`/characters/${index + 1}`}>
              <h3>{character.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;