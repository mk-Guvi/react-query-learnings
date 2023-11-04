import { HomePage } from './components/Home.page'

import { RQSuperHeroPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/Superheroes.page'
import { Route, Link, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
          <Route path="/rq-super-heroes" element={<RQSuperHeroPage />}></Route>

          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
