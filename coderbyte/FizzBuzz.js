// FizzBuzz

function FizzBuzz(num) {
    var result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }

    return result.map((x) => {
        if (x % 3 === 0 && x % 5 === 0) return "FizzBuzz";
        else if (x % 3 === 0) return "Fizz";
        else if (x % 5 === 0) return "Buzz";
        else return x;
    }).join(" ");
}

console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));