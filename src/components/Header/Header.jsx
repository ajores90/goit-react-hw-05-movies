import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderContainer, SiteHeader, Navigation, StyledNavLink, MainContent } from './Header.styled';
import Loading from '../../components/Loading/Loading';

const Header = () => {
  return (
    <HeaderContainer>
      <SiteHeader>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Navigation>
      </SiteHeader>
      <Suspense fallback={<Loading />}>
        <MainContent>
          <Outlet />
        </MainContent>
      </Suspense>
    </HeaderContainer>
  );
};

export default Header;
