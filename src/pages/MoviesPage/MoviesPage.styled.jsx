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

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  flex-grow: 1;
  font-size: 1rem;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center; // Added this line to center the movie items
`;

export const MovieItem = styled.li`
  flex: 0 0 calc(25% - 20px); // Updated the flex-basis value for 4 movies per row
  margin: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-decoration: none;
  color: #333;
  align-items: center;
  gap: 15px;
  height: 100%;
  font-weight: bold;
  text-align: center;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 450px;
`;
