// Code land Username Validation

function CodelandUsernameValidation(str) {
    if (/[0-9_]/g.test(str[0]) || str[str.length - 1] === '_') return false;
    let regex = /^[a-zA-Z0-9_]{4,25}$/;
    return regex.test(str);

}

console.log(CodelandUsernameValidation("aaa_")); // false
console.log(CodelandUsernameValidation("1aaa")); // false
console.log(CodelandUsernameValidation("_aaa")); // true
console.log(CodelandUsernameValidation("u__hello_world123")); // true
