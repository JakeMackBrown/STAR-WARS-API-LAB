import { useEffect, useState } from 'react';
import axios from 'axios';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => setFilms(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Films</h2>
      <ul>
        {films.map(film => (
          <li key={film.title}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Films;