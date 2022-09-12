// setTimeout(() => {
//     console.log('Merhaba');
// }, 5000);

// setInterval(() => {
//     console.log('Merhaba ben her saniyede bir çalışıyorum.');
// }, 1000);

// const sayHi = (callback) => {
//     callback();
// }

// sayHi(() => {
//     console.log('Hello');
// });

import fetch from "node-fetch";
import axios from "axios";

// fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos')
//     .then(data => data.json())
//     .then(users => {
//         console.log('users yuklendi: ', users);

//         fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos/1')
//             .then(data => data.json())
//             .then(user1 => {
//                 console.log('user1 yuklendi: ', user1);

//                 fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos/2')
//                     .then(data => data.json())
//                     .then(user2 => console.log('user2 yuklendi: ', user2));
//             });
//     });

// async function getData() {
//     const users = await (await fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos')).json();

//     const user1 = await (await fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos/1')).json();

//     const user2 = await (await fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos/2')).json();

//     console.log('users: ', users);
//     console.log('user1: ', user1);
//     console.log('user2: ', user2);
// }

// getData();

// (async () => {
//     const users = await (await fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos')).json();

//     const user1 = await (await fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos/1')).json();

//     const user2 = await (await fetch('https://63188587f6b281877c6eb67f.mockapi.io/todos/2')).json();

//     console.log('users: ', users);
//     console.log('user1: ', user1);
//     console.log('user2: ', user2);
// })();

// (async () => {
//     const { data: users } = await axios('https://63188587f6b281877c6eb67f.mockapi.io/todos');

//     const { data: user1 } = await axios('https://63188587f6b281877c6eb67f.mockapi.io/todos/1');

//     const { data: user2 } = await axios('https://63188587f6b281877c6eb67f.mockapi.io/todos/2');

//     console.log('users: ', users);
//     console.log('user1: ', user1);
//     console.log('user2: ', user2);
// })();

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data: users } = await axios('https://63188587f6b281877c6eb67f.mockapi.io/todos');
        resolve(users);
    });
};

const getUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        const { data: users } = await axios('https://63188587f6b281877c6eb67f.mockapi.io/todos/' + userId);
        resolve(users);
        // reject('Hata oluştu');
    });
};

// (async () => {
//     try {
//         const users = await getUsers();
//         const user = await getUser(1);

//         console.log('users: ', users);
//         console.log('user: ', user);
//     } catch (error) {
//         console.log(error);
//     }
// })()

Promise.all([getUsers(), getUser(1)])
    .then(console.log)
    .catch(console.log);