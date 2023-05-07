import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, CastList, CastItem, ProfileImage, ActorName, CharacterName } from './Cast.styled';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import fallbackProfile from '../../images/no_image.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const API_KEY = '48f720fbe71ad73e8e057438acdbaed5';
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setCast(response.data.cast);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) {
    return <Loading />;
  }

  const profileBaseUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <Container>
      <CastList>
        {cast.map(actor => {
          const profileUrl = actor.profile_path
            ? profileBaseUrl + actor.profile_path
            : fallbackProfile;
          return (
            <CastItem key={`${actor.id}-${actor.name}-${actor.character}`}>
              <ProfileImage
                src={profileUrl}
                alt={`${actor.name} profile`}
                width="150"
              />
              <div>
                <ActorName>Actor: {actor.name}</ActorName>
                <CharacterName>Character: {actor.character}</CharacterName>
              </div>
            </CastItem>
          );
        })}
      </CastList>
    </Container>
  );
};

export default Cast;
