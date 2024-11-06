import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => setStarships(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="starship">
      <h2>List of Starships</h2>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>
            <Link to={`/starships/${index + 1}`}>
              <h3>{starship.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipList;