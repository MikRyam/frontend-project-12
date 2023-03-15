import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './hooks';
import './App.css';
import Layout from './components/Layout';
import Chat from './Pages/Chat';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NotFoundPage from './Pages/NotFoundPage';
import routes from './routes';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  return auth.loggedIn ? children : <Navigate to={routes.loginPagePath()} />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
