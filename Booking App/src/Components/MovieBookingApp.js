import React, { useState } from 'react';

// Sample movie data
const moviesData = [
  { id: 1, title: 'Movie 1', showtimes: ['10:00 AM', '2:00 PM'] },
  { id: 2, title: 'Movie 2', showtimes: ['11:00 AM', '3:00 PM'] },
  // Add more movie data as needed
];

const MovieBookingApp = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSelectedShowtime(null);
    setSelectedSeats([]);
  };

  const handleShowtimeSelect = (showtime) => {
    setSelectedShowtime(showtime);
    setSelectedSeats([]);
  };

  const handleSeatSelect = (seat) => {
    setSelectedSeats([...selectedSeats, ]);
    alert((seat))
  };

  return (
    <div className='container'>
      <h1>Movie Booking</h1>

      {/* Movie List */}
      <ul>
        {moviesData.map((movie) => (
          <li key={movie.id}>
            <button onClick={() => handleMovieSelect(movie)} className='btn btn-info mb-3'>
              {movie.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Showtimes */}
      {selectedMovie && (
        <div>
          <h2>Showtimes for {selectedMovie.title}</h2>
          <ul>
            {selectedMovie.showtimes.map((showtime) => (
              <li key={showtime}>
                <button onClick={() => handleShowtimeSelect(showtime)} className='btn btn-danger mb-3'>
                  {showtime}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Seat Selection */}
      {selectedShowtime && (
        <div>
          <h2>Select your seats for {selectedShowtime}</h2>
          <div>
            {Array.from({ length: 10 }, (_, index) => (
              <button
                key={index}
                onClick={() => handleSeatSelect(index + 1)}
                disabled={selectedSeats.includes(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <p> {selectedSeats.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default MovieBookingApp;