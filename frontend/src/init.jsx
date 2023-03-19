import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { store } from './app/store';
import AuthProvider from './providers/AuthProvider';
import SocketProvider from './providers/SocketProvider';
import socketAPI from './socketIo/socketAPI';
import AppRoutes from './AppRoutes';
import ModalWindow from './components/Modals/Modal';
import resources from './locals/locals';

const init = async (socket) => {
  const defaultLanguage = 'ru';
  await i18next.use(initReactI18next).init({
    lng: defaultLanguage,
    debug: false,
    resources,
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <SocketProvider socket={socketAPI(socket)}>
            <AppRoutes />
            <ModalWindow />
          </SocketProvider>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default init;
