import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, Form, Input, Button, MovieList, MovieItem, MovieLink } from './MoviesPage.styled';
import {
  useNavigate,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const currentQuery = searchParams.get('query');

    if (currentQuery) {
      fetchMovies(currentQuery);
    }
  }, [searchParams]);

  const fetchMovies = async query => {
    setLoading(true);
    const API_KEY = '48f720fbe71ad73e8e057438acdbaed5';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/movies?query=${searchQuery}`);
  };

  return (
    <Container>
      <Title>Movie search</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Enter the name of the movie"
        />
        <Button type="submit">Search</Button>
      </Form>

      {loading && <Loading />}

      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </Container>
  );
};

export default MoviesPage;
