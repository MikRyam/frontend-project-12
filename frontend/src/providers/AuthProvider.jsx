import React, { useMemo, useState } from 'react';
import AuthContext from '../contexts/authContext';

const AuthProvider = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const username = currentUser ? currentUser.username : null;

  const [loggedIn, setLoggedIn] = useState(!!username);

  const AuthProviderValue = useMemo(() => {
    const headers = (currentUser && currentUser.token)
      ? { Authorization: `Bearer ${currentUser.token}` }
      : {};
    const logIn = () => setLoggedIn(true);
    const logOut = () => {
      localStorage.removeItem('user');
      setLoggedIn(false);
    };
    return {
      loggedIn,
      logIn,
      logOut,
      username,
      headers,
    };
  }, [loggedIn, username]);

  return (
    <AuthContext.Provider value={AuthProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
