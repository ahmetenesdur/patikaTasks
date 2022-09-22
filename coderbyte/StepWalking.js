// Step Walking

function StepWalking(num) {
    if (num <= 1) {
        return 1;
    }
    return StepWalking(num - 1) + StepWalking(num - 2);
}

console.log(StepWalking(1));
console.log(StepWalking(2));
console.log(StepWalking(3));
console.log(StepWalking(4));
console.log(StepWalking(5));