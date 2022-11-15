import io from 'socket.io-client';

let socket;

export const init = (room) => {
    console.log('Connecting to socket...');

    socket = io('http://localhost:5000', {
        transports: ['websocket'],
    });

    socket.on('connect', () => {
        console.log('Connected to socket!');
    });
}