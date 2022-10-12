// Number Search

function NumberSearch(str) {
    var numbers = str.match(/\d+/g);
    var letters = str.match(/[a-zA-Z]/g);
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    return Math.floor(sum / letters.length);
}

console.log(NumberSearch("H3ello9-9")); // 4
console.log(NumberSearch("One Number*1*")); // 0
console.log(NumberSearch("3ko6")); // 4