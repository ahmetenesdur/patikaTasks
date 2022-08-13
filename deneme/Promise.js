function addString(previous, current) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(previous + " " + current);
      }, Math.floor(Math.random() * 100) + 1);
    });
  }

  function addAll() {
    addString("", "A")
      .then((result) => {
        return addString(result, "B");
      })
      .then((result) => {
        return addString(result, "C");
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }
  addAll();