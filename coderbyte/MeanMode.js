// Mean Mode

function MeanMode(arr) {
    let mean = 0;
    let mode = 0;
    let modeCount = 0;
    let modeObj = {};
    let meanMode = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (modeObj[arr[i]]) {
            modeObj[arr[i]]++;
        } else {
            modeObj[arr[i]] = 1;
        }
    }

    mean = sum / arr.length;

    for (let key in modeObj) {
        if (modeObj[key] > modeCount) {
            modeCount = modeObj[key];
            mode = key;
        }
    }

    if (mean == mode) {
        meanMode = 1;
    }
    return meanMode;
}

console.log(MeanMode([4, 4, 4, 6, 2]));
