import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import useAuth from '../hooks';
import { Button } from 'react-bootstrap';

const Header = () => {
  const auth = useAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="shadow"
    >
      <Container>
        <NavLink className="navbar-brand" to={routes.homePagePath()}>
          Hexlet Chat
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            {auth.loggedIn && <Button onClick={auth.logOut}>Выйти</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
