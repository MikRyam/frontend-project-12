import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container className="h-100 mx-auto" fluid>
      <Row className="justify-content-center align-content-center h-100">
        <div className="text-dark text-center d-flex flex-column gap-5">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred</p>
          <h4 className="text-opacity-25">
            <em>Page not found</em>
          </h4>
          <Link className="link-dark" to="/">
            return Home
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
