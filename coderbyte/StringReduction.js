function StringReduction(str) {
    let strArr = str.split("");
    let repeat = true;

    while (repeat) {
        let i = 0;
        repeat = false;
        while (i < strArr.length - 1) {
            if (strArr[i] == strArr[i + 1]) {
                i += 1;
            } else {
                let temp;
                if (strArr[i] != "a" && strArr[i + 1] != "a") temp = "a";
                else if (strArr[i] != "b" && strArr[i + 1] != "b") temp = "b";
                else temp = "c";
                strArr.splice(i, 2, temp);
                repeat = true;
            }
        }
    }
    return strArr.length;
}

console.log(StringReduction('abcabc')); // 2
console.log(StringReduction('cccc')); // 4
