const FilterPanel = ({ genres, filters, setFilters, setSort }) => {
    const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    };

    return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
            name="genre"
            onChange={handleFilterChange}
            className="p-2 rounded bg-white dark:bg-gray-700"
        >
            <option value="">All Genres</option>
            {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
                {genre.name}
            </option>
            ))}
        </select>
        <input
            type="number"
            name="year"
            placeholder="Release Year"
            onChange={handleFilterChange}
            className="p-2 rounded bg-white dark:bg-gray-700"
        />
        <select
            name="rating"
            onChange={handleFilterChange}
            className="p-2 rounded bg-white dark:bg-gray-700"
        >
            <option value="">All Ratings</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
            <option value="9">9+</option>
        </select>
        </div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Sort By</h2>
        <select
        onChange={(e) => setSort(e.target.value)}
        className="p-2 rounded bg-white dark:bg-gray-700"
        >
        <option value="popularity.desc">Popularity</option>
        <option value="release_date.desc">Release Date</option>
        <option value="vote_average.desc">Rating</option>
        <option value="title.asc">Title (A-Z)</option>
        </select>
    </div>
    );
};

export default FilterPanel;