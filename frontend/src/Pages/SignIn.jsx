import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {
  Card,
  Col,
  Row,
  Form,
  Button,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './SignIn.module.css';
import routes from '../routes';
import useAuth from '../hooks';
import Loading from '../components/Loading';

const SignIn = () => {
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const [authFailed, setAuthFailed] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const signInValidation = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required(t('signIn.validation.requiredField')),
    password: yup
      .string()
      .trim()
      .required(t('signIn.validation.requiredField')),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: signInValidation,
    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(true);
        console.log(values);
        const response = await axios.post(routes.loginPath(), values);
        localStorage.setItem('user', JSON.stringify(response.data));
        auth.logIn();
        setAuthFailed(false);
        actions.setSubmitting(false);
        toast.success(t('toastify.signInSuccess'));
        navigate(routes.homePagePath());
        return values;
      } catch (err) {
        actions.setSubmitting(false);
        if (!err.isAxiosError) {
          console.log(t('errors.unknown'));
          toast.error(t('errors.unknown'));
          throw err;
        }
        if (err.response?.status === 401) {
          setAuthFailed(true);
          toast.error(t('signIn.signInFailed'));
          inputRef.current.select();
        } else {
          console.log(t('errors.network'));
          toast.error(t('errors.network'));
          throw err;
        }
        return values;
      }
    },
  });

  return (
    <Container className="h-100 bg-dark bg-opacity-10" fluid>
      <Row className="justify-content-center align-content-center h-100">
        <Col xs={12} md={6} xxl={4} className="mt-5 mb-5">
          <Card className="shadow bg-light text-black">
            <Card.Body className="p-lg-4 p-xl-5">
              <h1 className="mb-4 fw-light text-center">
                {t('signIn.pageHeader')}
              </h1>
              <div className="pt-lg-3">
                <Form onSubmit={formik.handleSubmit} noValidate>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label htmlFor="username">
                      {t('signIn.usernameLabel')}
                    </Form.Label>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      onBlur={formik.handleBlur}
                      className="form-input bg-light text-black"
                      name="username"
                      id="username"
                      autoComplete="username"
                      required
                      isInvalid={
                        (formik.touched.username && formik.errors.username)
                        || authFailed
                      }
                      ref={inputRef}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label htmlFor="password">
                      {t('signIn.passwordLabel')}
                    </Form.Label>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      type="password"
                      className="form-input bg-light text-black"
                      name="password"
                      id="password"
                      autoComplete="password"
                      required
                      isInvalid={
                        (formik.touched.password && formik.errors.password)
                        || authFailed
                      }
                    />

                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password || t('signIn.signInFailed')}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 pb-2 pt-2 mt-5"
                    data-disable-with="Войти"
                    disabled={
                      formik.isSubmitting
                      // || formik.errors.username
                      // || formik.errors.password
                      // || !formik.values.username
                      // || !formik.values.password
                    }
                  >
                    {formik.isSubmitting ? (
                      <Loading />
                    ) : (
                      <span>{t('signIn.loginButton')}</span>
                    )}
                  </Button>
                </Form>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0 text-center py-3 bg-light">
              <div className="py-lg-2 d-flex justify-content-center gap-3">
                <span className="text-muted">
                  {t('signIn.footer.signUpHeader')}
                </span>
                <Link className="link-dark" to="/signup">
                  {t('signIn.footer.signUp')}
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
