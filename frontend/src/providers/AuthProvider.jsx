import React, { useMemo, useState } from 'react';
import AuthContext from '../contexts';

const AuthProvider = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const username = currentUser ? currentUser.username : null;

  const [loggedIn, setLoggedIn] = useState(false);

  const AuthProviderValue = useMemo(() => {
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
    };
  }, [loggedIn, username]);

  return (
    <AuthContext.Provider value={AuthProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
