let person = {
  name: "Jack",
  age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject); 
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 