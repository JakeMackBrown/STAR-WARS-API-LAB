import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => setFilms(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="films">
      <h2>List of Films</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            <Link to={`/films/${index + 1}`}>
              <h3>{film.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Films;