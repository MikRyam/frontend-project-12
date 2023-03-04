import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";

const Home = () => {
  return (
    <Container className="h-100 bg-dark bg-opacity-10 mx-auto" fluid>
      <Row className="justify-content-center align-content-center h-100">
        Home Page
      </Row>
    </Container>
  );
};

export default Home;
