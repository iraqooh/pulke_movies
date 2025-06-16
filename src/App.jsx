import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import Search from './pages/Search'
import Movie from './pages/Movie'
import Browse from './pages/Browse'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/browse/:category" element={<Browse />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
