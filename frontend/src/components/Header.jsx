import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="shadow">
      <Container>
        <NavLink className="navbar-brand" to={`/`}>Chat App</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <NavLink className="nav-link" to={`about`}>О проекте</NavLink>
            <NavLink className="nav-link" to={`login`}>Войти</NavLink>
            <NavLink className="nav-link" to={`signup`}>Зарегистрироваться</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
