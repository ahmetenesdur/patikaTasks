const users = ['Nathan', 'John', 'William'];
const usersDetail = [{ name: 'Nathan', age: 24 }, { name: 'John', age: 26 }, { name: 'William', age: 27 }];

/*
    .push() bir dizinin sonuna bir öğe ekler
    .map(), her dizi öğesi için bir işlev çağırmanın sonuçlarıyla yeni bir dizi oluşturur
    .find(), bir dizideki testi geçen ilk öğenin değerini döndürür (işlev olarak sağlanır)
    .filter(), bir dizideki testi geçen her öğeyle (işlev olarak sağlanır) yeni bir dizi oluşturur
    .some() bir dizideki öğelerden herhangi birinin bir testi geçip geçmediğini kontrol eder (bir işlev olarak sağlanır)
    .every() bir dizideki tüm öğelerin bir testi geçip geçmediğini kontrol eder (bir işlev olarak sağlanır)
    .includes(), bir dizinin belirtilen öğeyi içerip içermediğini kontrol eder
*/

// .push()
users.push('Ava');
console.log(users);

// .map()
const nameLengths = users.map(name => {
    return name.length;
});
console.log(nameLengths);

// .find()
const user = users.find(name => {
    return name.length > 4;
});
console.log(user);

// .filter()
const longNames = users.filter(name => {
    return name.length > 4;
});
console.log(longNames);

const filterUsers = usersDetail.filter(({ name, age }) => name === 'Nathan' && age > 20);
console.log(filterUsers);

// .some()
const hasLongNames = users.some(name => {
    return name.length > 4;
});
console.log(hasLongNames);

// .every()
const allHaveLongNames = users.every(name => {
    return name.length > 4;
});
console.log(allHaveLongNames);

// .includes()
const hasNathan = users.includes('Nathan');
console.log(hasNathan);