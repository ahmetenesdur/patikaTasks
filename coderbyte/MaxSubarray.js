// Max Subarray

function MaxSubarray(arr) {
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }
    return max;
}

console.log(MaxSubarray([-2, 5, -1, 7, -3])); // 11
console.log(MaxSubarray([-1, -2, 0, 3])); // 3
console.log(MaxSubarray([3, -1, -1, 4, 3, -1])); // 8