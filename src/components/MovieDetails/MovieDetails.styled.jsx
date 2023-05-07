import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

export const Poster = styled.img`
  border-radius: 5px;
`;

export const Score = styled.p`
  font-size: 1.2rem;
`;

export const OverviewTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export const GenresTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const GenreItem = styled.li`
  display: inline;
  margin-right: 10px;
`;

export const AdditionalInfoTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const AdditionalInfoLink = styled(Link)`
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;
