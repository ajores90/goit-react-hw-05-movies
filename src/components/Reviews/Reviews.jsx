import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ReviewList, ReviewItem, Author, Content } from './Reviews.styled';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const API_KEY = '48f720fbe71ad73e8e057438acdbaed5';
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setReviews(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <Loading />;
  }

  if (reviews.length === 0) {
    return <Content>We don't have any reviews for this movie.</Content>;
  }

  return (
    <Container>
      <ReviewList>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <Author>{review.author}</Author>
            <Content>{review.content}</Content>
          </ReviewItem>
        ))}
      </ReviewList>
    </Container>
  );
};

export default Reviews;
