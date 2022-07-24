var firstName = 'Ahmet Enes';
var soyad = 'Dur'
let email = "kodluyoruz@kodluyoruz.org"

console.log(email.slice(10+1));
console.log(firstName.slice(1,4));

let domain = email.slice(email.search("@")+1); 
console.log(domain); //"kodluyoruz.org"

email = email.replace("kodluyoruz.org", "gmail.com");
console.log(email); //"kodluyoruz@gmail.com"
