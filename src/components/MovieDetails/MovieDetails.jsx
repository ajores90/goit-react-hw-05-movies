import React, { useState, useEffect, useRef, Suspense } from 'react';
import axios from 'axios';
import {
  Container,
  BackLink,
  Title,
  Poster,
  Score,
  OverviewTitle,
  Overview,
  GenresTitle,
  GenresList,
  GenreItem,
  AdditionalInfoTitle,
  AdditionalInfoLink,
} from './MovieDetails.styled';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import fallbackPoster from '../../images/no_poster.png';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_KEY = '48f720fbe71ad73e8e057438acdbaed5';
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';

  const posterUrl = movieDetails.poster_path
    ? posterBaseUrl + movieDetails.poster_path
    : fallbackPoster;

  return (
    <Container>
      <BackLink to={backLink.current}>Go back</BackLink>
      <Title>
        {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
      </Title>
      <Poster
        src={posterUrl}
        alt={`${movieDetails.title} poster`}
        width="300"
      />
      <Score>User Score: {Math.round(movieDetails.vote_average * 10)}%</Score>
      <OverviewTitle>Overview:</OverviewTitle>
      <Overview>{movieDetails.overview}</Overview>
      <GenresTitle>Genres:</GenresTitle>
      <GenresList>
        {movieDetails.genres.map(genre => (
          <GenreItem key={genre.id}>{genre.name}</GenreItem>
        ))}
      </GenresList>
      <div>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
        <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default MovieDetails;
