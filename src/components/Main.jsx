import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
// import StarshipList from './StarshipList.jsx'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/starships" element={<StarshipList />} /> */}
            </Routes>
        </main>
    )
}

export default Main