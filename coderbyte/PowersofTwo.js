// Powers of Two

function PowersofTwo(num) {
    if (num === 1) return true;
    if (num % 2 !== 0) return false;
    return PowersofTwo(num / 2);
}

console.log(PowersofTwo(4)); // true
console.log(PowersofTwo(124)); // false
console.log(PowersofTwo(64)); // true