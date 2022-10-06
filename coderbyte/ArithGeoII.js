// Arith Geo II

function ArithGeoII(arr) {
    var arith = true;
    var geo = true;
    var diff = arr[1] - arr[0];
    var ratio = arr[1] / arr[0];

    for (var i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) arith = false;
        if (arr[i] / arr[i - 1] !== ratio) geo = false;
    }

    if (arith) return "Arithmetic";
    else if (geo) return "Geometric";
    else return -1;
}

console.log(ArithGeoII([2, 4, 6, 8])); // "Arithmetic"
console.log(ArithGeoII([2, 6, 18, 54])); // "Geometric"
console.log(ArithGeoII([5, 10, 15])); // "Arithmetic"
console.log(ArithGeoII([2, 4, 16, 24])); // -1