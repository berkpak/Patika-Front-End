import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedStarship, setSelectedStarship] = useState(null);

  useEffect(() => {
    fetchStarships(page);
  }, [page]);

  const fetchStarships = async page => {
    const response = await fetch(
      `https://swapi.dev/api/starships/?page=${page}`
    );
    const data = await response.json();
    setStarships(prevStarships => [...prevStarships, ...data.results]);
  };

  const handleSearch = async e => {
    e.preventDefault();
    const response = await fetch(
      `https://swapi.dev/api/starships/?search=${searchTerm}`
    );
    const data = await response.json();
    setStarships(data.results);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleStarshipClick = starship => {
    setSelectedStarship(starship);
  };

  const handleBackToList = () => {
    setSelectedStarship(null);
  };

  return (
    <div className='App'>
      <h1>Star Wars Starships</h1>
      {!selectedStarship ? (
        <>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Search by name or model...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button type='submit'>Search</button>
          </form>
          <div className='starship-list'>
            {starships.map(starship => (
              <div
                key={starship.name}
                className='starship-card'
                onClick={() => handleStarshipClick(starship)}
              >
                <h2>{starship.name}</h2>
                <p>Model: {starship.model}</p>
                <p>Max Speed: {starship.max_atmosphering_speed}</p>
              </div>
            ))}
          </div>
          <button onClick={handleLoadMore}>Load More</button>
        </>
      ) : (
        <div className='starship-details'>
          <h2>{selectedStarship.name}</h2>
          <p>Model: {selectedStarship.model}</p>
          <p>Passengers: {selectedStarship.passengers}</p>
          <p>Max Speed: {selectedStarship.max_atmosphering_speed}</p>
          <p>Manufacturer: {selectedStarship.manufacturer}</p>
          <p>Crew: {selectedStarship.crew}</p>
          <p>Cargo Capacity: {selectedStarship.cargo_capacity}</p>
          <button onClick={handleBackToList}>Back to List</button>
        </div>
      )}
    </div>
  );
};

export default App;
