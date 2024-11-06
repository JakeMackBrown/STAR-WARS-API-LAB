import { useEffect, useState } from 'react';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/')
      .then(response => setPlanets(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Planets</h2>
      <ul>
        {planets.map(planet => (
          <li key={planet.name}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;