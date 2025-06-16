import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [query, navigate])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (query.trim()) {
  //       navigate(`/search?q=${encodeURIComponent(query)}`);
  //   }
  // };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-2xl mx-auto my-4">
        <div className="relative">
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search movies,genres, actors..." 
                className="w-full p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-non focus:ring-2 focus:ring-blue-500" 
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                Search
            </button>
        </div>
    </form>
  )
}

export default SearchBar