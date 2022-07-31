let nums = [2, 3, 6, 6, 5]

function getSecondLargest(nums) {
    let newNums = nums.slice()
    newNums.sort(function(a,b){return b-a})

    return newNums.find(function (element){
        return newNums[0] > element
    })
}

console.log(getSecondLargest(nums));
