function vowelsAndConsonants(s) {
    let vowel = ["a", "e", "i", "o", "u"]
    for(let word in s){
        if(vowel.includes(s[word])){
            console.log(s[word]);
        }
    }
    for(let word in s){
        if(!vowel.includes(s[word])){
            console.log(s[word]);
        }
    }
}