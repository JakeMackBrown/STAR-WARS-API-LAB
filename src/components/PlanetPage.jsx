import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PlanetPage = () => {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}/`)
      .then(response => setPlanet(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return planet ? (
    <div className="detail">
      <h2>Name: {planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Population: {planet.population}</p>
      <Link to="/planets">Return to planets list</Link>
    </div>
  ) : (
    <h3>Finding planet...</h3>
  );
};

export default PlanetPage;