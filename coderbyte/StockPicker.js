// Stock Picker

function StockPicker(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] > max) {
                max = arr[j] - arr[i];
            }
        }
    }
    return max > 0 ? max : -1;
}

console.log(StockPicker([10, 12, 4, 5, 9]));
