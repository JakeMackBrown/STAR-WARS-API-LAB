import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const StarshipPage = () => {
  const [starship, setStarship] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}/`)
      .then(response => setStarship(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return starship ? (
    <div className="detail">
      <h2>Name: {starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
      <Link to="/starships">Return to starship list</Link>
    </div>
  ) : (
    <h3>Finding starship...</h3>
  );
};

export default StarshipPage;