// Trapping Water

function TrappingWater(arr) {
    var left = 0;
    var right = arr.length - 1;
    var leftMax = 0;
    var rightMax = 0;
    var water = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            if (arr[left] > leftMax) leftMax = arr[left];
            else water += leftMax - arr[left];
            left++;
        } else {
            if (arr[right] > rightMax) rightMax = arr[right];
            else water += rightMax - arr[right];
            right--;
        }
    }
    return water;
}

console.log(TrappingWater([3, 0, 0, 2, 0, 4])); // 10
console.log(TrappingWater([1, 2, 1, 2])); // 1
console.log(TrappingWater([0, 2, 4, 0, 2, 1, 2, 6])); // 11