import getData from "./app.js";

getData(1)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
