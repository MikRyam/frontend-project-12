import React, { useState } from 'react';
import AuthContext from '../contexts';

const AuthProvider = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const username = currentUser ? currentUser.username : null;

  const [loggedIn, setLoggedIn] = useState(false);
  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
