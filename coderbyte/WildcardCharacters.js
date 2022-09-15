// Wildcard Characters

function WildcardCharacters(str) {
    var pattern = str.split(' ')[0];
    var str = str.split(' ')[1];
    var patternSum = 0;
    let patternArr = pattern.replace(/[{}]/g, '').split('').map((x) => {
        if (x === '*') {
            return 3;
        } else if (x === '+') {
            return 1;
        } else {
            return x;
        }
    });

    for (let i = 0; i < patternArr.length; i++) {
        if (typeof patternArr[i] === 'number' && typeof patternArr[i + 1] === 'string') {
            patternArr[i] = patternArr[i] - 1;
            patternArr.pop();
        }
    }

    for (let i = 0; i < patternArr.length; i++) {
        patternSum += patternArr[i];
    }

    return patternSum === str.length ? 'true' : 'false';
}

console.log(WildcardCharacters("**+*{2} mmmrrrkbb")); // true