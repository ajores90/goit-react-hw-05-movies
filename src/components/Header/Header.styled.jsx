import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SiteHeader = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  margin-left: 20px;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
  }
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
