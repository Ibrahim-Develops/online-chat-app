import { io } from 'socket.io-client';

const socket = io(process.env.BASE_URL, { transports: ['websocket'] });
export default socket;

