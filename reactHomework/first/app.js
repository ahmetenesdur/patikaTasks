import axios from "axios";

const getUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/' + userId);
        resolve(user);
    });
};

const getPosts = (postId) => {
    return new Promise(async (resolve, reject) => {
        const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + postId);
        resolve(post);
    });
};

async function getData(userId) {
    try {
        const users = await getUsers(userId);
        const posts = await getPosts(userId);

        return { users, posts };
    } catch (err) {
        console.log(err);
    }
};

export default getData;