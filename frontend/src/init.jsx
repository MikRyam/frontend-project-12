import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AuthProvider from './providers/AuthProvider';
import SocketProvider from './providers/SocketProvider';
import socketAPI from './socketIo/socketAPI';
import AppRoutes from './AppRoutes';
import ModalWindow from './components/Modals/Modal';

const init = async (socket) => {
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
