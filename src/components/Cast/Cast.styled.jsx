import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

export const ProfileImage = styled.img`
  border-radius: 5px;
`;

export const ActorName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 0;
`;

export const CharacterName = styled.p`
  font-size: 1rem;
  color: #666;
`;
