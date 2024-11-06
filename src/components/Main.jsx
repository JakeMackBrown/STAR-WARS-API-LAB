import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import StarshipList from './StarshipList.jsx'
import Films from './Films'
import Planets from './Planets'
import Characters from './Characters'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/starships" element={<StarshipList />} /> 
                <Route path="/films" element={<Films />} /> 
                <Route path="/planets" element={<Planets />} /> 
                <Route path="/characters" element={<Characters />} />
            </Routes>
        </main>
    )
}

export default Main