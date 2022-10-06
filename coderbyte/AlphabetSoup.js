// Alphabet Soup

function AlphabetSoup(str) { 
    var arr = str.split('');
    arr.sort();
    return arr.join('');
}

console.log(AlphabetSoup("coderbyte")); // => "bcdeeorty"
console.log(AlphabetSoup("hooplah")); // => "ahhloop"