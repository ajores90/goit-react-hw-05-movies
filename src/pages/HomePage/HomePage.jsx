import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Title,
  MovieList,
  MovieItem,
  MovieLink,
  MoviePoster,
} from './HomePage.styled';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = '48f720fbe71ad73e8e057438acdbaed5';
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
              {movie.title}
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </Container>
  );
};

export default HomePage;
