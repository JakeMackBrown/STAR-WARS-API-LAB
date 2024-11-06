import { useEffect, useState } from 'react';
import axios from 'axios';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => setStarships(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Starships</h2>
      <ul>
        {starships.map(starship => (
          <li key={starship.name}>{starship.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipList;