import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const suggestionsData = [
  'Goa', 'Manali', 'Dubai', 'Singapore', 'Europe', 'Thailand', 'Maldives',
  'Himachal', 'Kerala', 'Andaman', 'Bali', 'Kashmir', 'Australia'
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = suggestionsData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSelectSuggestion = (value) => {
    setQuery(value);
    setFilteredSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted for:', query);
    // Redirect or API logic here
  };

  return (
    <div    data-aos="fade-up" className="w-full px-4 sm:px-6 md:px-0 max-w-xl mx-auto mt-3 mb-3 relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white border border-gray-300 rounded-full shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-red-400"
      >
        <div className="pl-4 text-gray-500">
          <FiSearch size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search your dream destination..."
          className="flex-grow px-4 border-none py-3 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base rounded-r-full transition-all duration-300"
        >
          Search
        </button>
      </form>

      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded-xl mt-2 max-h-60 overflow-y-auto shadow-lg animate-fadeIn">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-5 py-3 text-gray-700 hover:bg-red-100 cursor-pointer transition-all duration-200"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
