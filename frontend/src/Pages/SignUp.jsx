import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import styles from './SignIn.module.css';
import routes from '../routes';
import useAuth from '../hooks';
import Loading from '../components/Loading';

const SignUp = () => {
  const inputRef = useRef(null);
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
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов')
      .typeError()
      .required('Обязательное поле'),
    password: yup
      .string()
      .trim()
      .min(6, 'Не менее 6 символов')
      .max(30, 'Не более 30 символов')
      .typeError()
      .required('Обязательное поле'),
    confirmPassword: yup
      .string()
      .test(
        'confirmPassword',
        'Пароли должны совпадать',
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
        navigate(routes.homePagePath());
      } catch (err) {
        actions.setSubmitting(false);
        if (!err.isAxiosError) {
          console.log('неизвестная ошибка');
          throw err;
        }
        if (err.response?.status === 409) {
          setRegFailed(true);
          inputRef.current.select();
        } else {
          console.log('ошибка сети');
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
              <h1 className="mb-4 fw-light text-center">Вход</h1>
              <div className="pt-lg-3">
                <Form onSubmit={formik.handleSubmit} noValidate>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label htmlFor="username">Имя пользователя</Form.Label>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      onBlur={formik.handleBlur}
                      className={`form-input bg-light text-black`}
                      name="username"
                      id="username"
                      autoComplete="username"
                      required
                      isInvalid={
                        (formik.touched.username && formik.errors.username) ||
                        regFailed
                      }
                      ref={inputRef}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label htmlFor="password">Пароль</Form.Label>
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
                        (formik.touched.password && formik.errors.password) ||
                        regFailed
                      }
                    />

                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label htmlFor="confirmPassword">Пароль</Form.Label>
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
                        (formik.touched.confirmPassword &&
                          formik.errors.confirmPassword) ||
                        regFailed
                      }
                    />

                    <Form.Control.Feedback type="invalid">
                      {formik.errors.confirmPassword ||
                        'Такой пользователь уже существует'}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 pb-2 pt-2 mt-5"
                    data-disable-with="Зарегистрироваться"
                    disabled={
                      formik.errors.username ||
                      formik.errors.password ||
                      formik.errors.confirmPassword ||
                      !formik.values.username ||
                      !formik.values.password ||
                      !formik.values.confirmPassword ||
                      formik.isSubmitting
                    }
                  >
                    {formik.isSubmitting ? (
                      <Loading />
                    ) : (
                      <span>Зарегистрироваться</span>
                    )}
                  </Button>
                </Form>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0 text-center py-3 bg-light">
              <div className="py-lg-2 d-flex justify-content-center gap-3">
                <span className="text-muted">Уже есть аккаунт?</span>
                <Link className="link-dark" to="/login">
                  Войти
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
