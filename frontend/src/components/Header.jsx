import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import AuthButton from './AuthButton';

const Header = () => {
  return (
    // fixed="top"
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="shadow"
    >
      <Container>
        <NavLink className="navbar-brand" to={routes.homePagePath()}>
          Chat App
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <NavLink className="nav-link" to={routes.aboutPagePath()}>
              О проекте
            </NavLink>
            <NavLink className="nav-link" to={routes.loginPagePath()}>
              Войти
            </NavLink>
            <NavLink className="nav-link" to={routes.signUpPagePath()}>
              Зарегистрироваться
            </NavLink>
            <AuthButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
