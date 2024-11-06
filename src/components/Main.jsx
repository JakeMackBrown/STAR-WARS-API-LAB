import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import StarshipList from './StarshipList';
import StarshipPage from './StarshipPage';
import Films from './Films';
import FilmPage from './FilmPage';
import Planets from './Planets';
import PlanetPage from './PlanetPage';
import Characters from './Characters';
import CharacterPage from './CharacterPage';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starships/:id" element={<StarshipPage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmPage />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
      </Routes>
    </main>
  );
};

export default Main