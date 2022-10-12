// Quick Knight

function QuickKnight(str) {
    const digits = str.match(/[1-8]+/g).map(Number);

    if (digits.length !== 4) {
        return -1;
    }

    const knight = new Coords(digits[0], digits[1]);
    const destination = new Coords(digits[2], digits[3]);
    const path = knightPathTo(knight, destination);

    return path.length - 1;
}

function Coords(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Coords.prototype.toString = function () {
    return `${this.x},${this.y}`;
};

Coords.prototype.isEqual = function (loc) {
    if (!(loc instanceof Coords)) {
        return false;
    }
    return this.x === loc.x && this.y === loc.y;
};

Coords.arrayIncludes = function (arr, loc) {
    if (!Array.isArray(arr) || !(loc instanceof Coords)) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isEqual(loc)) {
            return true;
        }
    }
    return false;
};

function knightPathTo(knight, destination) {
    if (!(knight instanceof Coords) || !(destination instanceof Coords)) {
        return [];
    }

    let queue = new Map();
    queue.set(knight.toString(), [knight]);

    while (queue.size !== 0) {
        const nextQueue = new Map();

        for (const path of queue) {
            const [pathKey, pathArr] = path;

            const lastLocation = pathArr[pathArr.length - 1];
            for (const move of knightLocations(lastLocation)) {
                if (move.isEqual(destination)) {
                    const finalPath = pathArr.slice();
                    finalPath.push(move);
                    return finalPath;
                }

                if (!Coords.arrayIncludes(pathArr, move)) {
                    const pathCopy = pathArr.slice();
                    pathCopy.push(move);
                    nextQueue.set(move.toString(), pathCopy);
                }
            }
        }
        queue = nextQueue;
    }
    return [];
}

function* knightLocations(loc) {
    if (!(loc instanceof Coords)) {
        return undefined;
    }

    const offsets = [
        new Coords(1, 2),
        new Coords(1, -2),
        new Coords(-1, 2),
        new Coords(-1, -2),
        new Coords(2, 1),
        new Coords(2, -1),
        new Coords(-2, 1),
        new Coords(-2, -1)
    ];

    for (let i = 0; i < offsets.length; i++) {
        const offset = offsets[i];
        const tryX = loc.x + offset.x;
        const tryY = loc.y + offset.y;

        if (tryX >= 1 && tryX <= 8 && tryY >= 1 && tryY <= 8) {
            yield new Coords(tryX, tryY);
        }
    }
}


console.log(QuickKnight("(2 3)(7 5)")); // 3
console.log(QuickKnight("(1 1)(8 8)")); // 6
console.log(QuickKnight("(2 2)(3 3)")); // 2

// source: https://github.com/bradhanson/coderbyte/blob/master/hard/quick_knight.js
