import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import leoProfanity from 'leo-profanity';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './app/store';
import AuthProvider from './providers/AuthProvider';
import SocketProvider from './providers/SocketProvider';
import socketAPI from './socketIo/socketAPI';
import AppRoutes from './AppRoutes';
import ModalWindow from './components/Modals/Modal';
import resources from './locals/locals';

const init = async () => {
  const defaultLanguage = 'ru';
  await i18next.use(initReactI18next).init({
    lng: defaultLanguage,
    debug: false,
    resources,
  });

  const socket = io();

  leoProfanity.clearList();
  leoProfanity.add(leoProfanity.getDictionary('en'));
  leoProfanity.add(leoProfanity.getDictionary('ru'));

  const rollbarConfig = {
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    environment: process.env.NODE_ENV,
  };

  return (
    <BrowserRouter>
      <RollbarProvider config={rollbarConfig}>
        <ErrorBoundary>
          <AuthProvider>
            <Provider store={store}>
              <SocketProvider socket={socketAPI(socket)}>
                <AppRoutes />
                <ModalWindow />
                <ToastContainer />
              </SocketProvider>
            </Provider>
          </AuthProvider>
        </ErrorBoundary>
      </RollbarProvider>
    </BrowserRouter>
  );
};

export default init;
