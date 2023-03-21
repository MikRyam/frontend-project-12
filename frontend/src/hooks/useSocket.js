import { useContext } from 'react';
import socketContext from '../contexts/socketContext';

const useSocket = () => useContext(socketContext);

export default useSocket;
