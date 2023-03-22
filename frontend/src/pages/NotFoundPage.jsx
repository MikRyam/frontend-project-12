import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Container className="h-100 mx-auto" fluid>
      <Row className="justify-content-center align-content-center h-100">
        <div className="text-dark text-center d-flex flex-column gap-5">
          <h1>{t('pageNotFound.oops')}</h1>
          <p>{t('pageNotFound.error')}</p>
          <h4 className="text-opacity-25">
            <em>{t('pageNotFound.notFound')}</em>
          </h4>
          <Link className="link-dark" to="/">
            {t('pageNotFound.returnButton')}
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
