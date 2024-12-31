import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState(''); // Stores user input
    const [suggestions, setSuggestions] = useState([]); // Stores fetched suggestions
    const navigate = useNavigate(); // For navigation to movie details page

    // Fetch movie suggestions based on user input
    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim()) {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie`,
                    {
                        params: {
                            api_key: '5f00e0b1163cbd60a2b383f1eba1e2e4',
                            query: value,
                        },
                    }
                );
                // Log the fetched data for debugging
                console.log('API Response:', response.data);
                setSuggestions(response.data.results.slice(0, 5)); // Limit to 5 results
            } catch (error) {
                console.error('Error fetching movie suggestions:', error.message);
            }
        } else {
            setSuggestions([]); // Clear suggestions if input is empty
        }
    };

    // Navigate to movie details page when a suggestion is clicked
    const handleSelect = (movie) => {
        console.log('Selected Movie:', movie); // Log the selected movie
        navigate(`/movie/${movie.id}`, { state: { movie } });
        setQuery(''); // Clear the search input
        setSuggestions([]); // Clear suggestions
    };

    return (
        <div className="relative w-full max-w-md ">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for movies..."
                className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {suggestions.map((movie) => (
                        <li
                            key={movie.id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSelect(movie)}
                        >
                            {movie.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
