import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MovieItem = styled.li`
  flex: 0 0 calc(33.333% - 20px);
  margin: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const MovieLink = styled(Link)`
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;
