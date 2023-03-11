import React from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Container className="h-100 bg-dark bg-opacity-10 mx-auto" fluid>
      <Row className="justify-content-center align-content-center h-100 text-center text-info">
        <h1>About</h1>
      </Row>
    </Container>
  );
};

export default About;
