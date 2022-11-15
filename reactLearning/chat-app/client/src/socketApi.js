import io from 'socket.io-client';

let socket;

export const init = (room) => {
    console.log('Connecting to socket...');

    socket = io('http://localhost:3000', {
        transports: ['websocket'],
    });

    socket.on('connect', () => console.log('Connected to socket!'));
}

export const sendMessage = (message) => {
    if (socket) socket.emit('new-message', message);
}

export const subscribeChat = (cb) => {
    if (!socket) return true;

    socket.on('receive-message', (message) => {
        console.log('Message received: ', message);
        cb(message);
    });
}

export const subscribeInitialMessages = (cb) => {
    if (!socket) return true;

    socket.on('message-list', (messages) => {
        console.log('Initial messages received: ', messages);
        cb(messages);
    });
}