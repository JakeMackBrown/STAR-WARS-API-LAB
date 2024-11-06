import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const FilmPage = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${id}/`)
      .then(response => setFilm(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return film ? (
    <div className="detail">
      <h2>Title: {film.title}</h2>
      <p>Episode ID: {film.episode_id}</p>
      <p>Opening Crawl: {film.opening_crawl}</p>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Release Date: {film.release_date}</p>
      <Link to="/films">Return to films list</Link>
    </div>
  ) : (
    <h3>Finding film...</h3>
  );
};

export default FilmPage;