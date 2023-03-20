import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
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

const SignUp = () => {
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const [regFailed, setRegFailed] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const signUpValidation = yup.object().shape({
    username: yup
      .string()
      .trim()
      .min(3, t('signUp.validation.usernameLength'))
      .max(20, t('signUp.validation.usernameLength'))
      .typeError()
      .required(t('signUp.validation.requiredField')),
    password: yup
      .string()
      .trim()
      .min(6, t('signUp.validation.passwordMinLength'))
      .max(30, t('signUp.validation.passwordMaxLength'))
      .typeError()
      .required(t('signUp.validation.requiredField')),
    confirmPassword: yup
      .string()
      .test(
        'confirmPassword',
        t('signUp.validation.confirmPassword'),
        (password, context) => password === context.parent.password,
      ),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpValidation,
    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(true);
        console.log(values);
        const response = await axios.post(routes.signupPath(), values);
        localStorage.setItem('user', JSON.stringify(response.data));
        auth.logIn();
        setRegFailed(false);
        actions.setSubmitting(false);
        toast.success(t('toastify.signUpSuccess'));
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
        if (err.response?.status === 409) {
          setRegFailed(true);
          toast.error(t('signUp.signUpFailed'));
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
                {t('signUp.pageHeader')}
              </h1>
              <div className="pt-lg-3">
                <Form onSubmit={formik.handleSubmit} noValidate>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label htmlFor="username">
                      {t('signUp.usernameLabel')}
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
                        || regFailed
                      }
                      ref={inputRef}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label htmlFor="password">
                      {t('signUp.passwordLabel')}
                    </Form.Label>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      type="password"
                      className="form-input bg-light text-black"
                      name="password"
                      id="password"
                      autoComplete="new-password"
                      required
                      isInvalid={
                        (formik.touched.password && formik.errors.password)
                        || regFailed
                      }
                    />

                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label htmlFor="confirmPassword">
                      {t('signUp.confirmPasswordLabel')}
                    </Form.Label>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      onBlur={formik.handleBlur}
                      type="password"
                      className="form-input bg-light text-black"
                      name="confirmPassword"
                      id="confirmPassword"
                      autoComplete="new-password"
                      required
                      isInvalid={
                        (formik.touched.confirmPassword
                          && formik.errors.confirmPassword)
                        || regFailed
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.confirmPassword
                        || t('signUp.signUpFailed')}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 pb-2 pt-2 mt-5"
                    data-disable-with="Зарегистрироваться"
                    disabled={
                      formik.isSubmitting
                      || formik.errors.username
                      || formik.errors.password
                      || formik.errors.confirmPassword
                      || !formik.values.username
                      || !formik.values.password
                      || !formik.values.confirmPassword
                    }
                  >
                    {formik.isSubmitting ? (
                      <Loading />
                    ) : (
                      <span>{t('signUp.registerButton')}</span>
                    )}
                  </Button>
                </Form>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0 text-center py-3 bg-light">
              <div className="py-lg-2 d-flex justify-content-center gap-3">
                <span className="text-muted">
                  {t('signUp.footer.signInHeader')}
                </span>
                <Link className="link-dark" to="/login">
                  {t('signUp.footer.signIn')}
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
