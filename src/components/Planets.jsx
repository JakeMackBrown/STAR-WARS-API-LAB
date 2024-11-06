import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/')
      .then(response => setPlanets(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="planets">
      <h2>List of Planets</h2>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <Link to={`/planets/${index + 1}`}>
              <h3>{planet.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;