import './css/App.css'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import NavBar from './components/NavBar.jsx'
import Sidebar from './components/Sidebar.jsx'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar />
      <div class="container">
      <Sidebar />
          <main className="main-content">
           <Routes> <Route path="/" element={<Home />} />
           <Route path="/favorites" element={<Favorites />} />
           </Routes>
           </main>
      </div>
    </div>
  )
}

export default App
