// Weighted Path

function WeightedPath(strArr) {
    var nodeCount = Number(strArr.splice(0, 1));
    var nodes = strArr.splice(0, nodeCount);
    var connections = strArr.map(v => v.split('|'));
    var startNode = nodes[0];
    var endNode = nodes[nodes.length - 1];

    var paths = [], pathWeights = [];
    findPaths([startNode], []);

    function findPaths(pathSoFar, weightSoFar) {
        var currentNode = pathSoFar[pathSoFar.length - 1];
        if (currentNode === endNode) {
            paths.push(pathSoFar.slice());
            pathWeights.push(weightSoFar.slice());
            return;
        }

        for (var i = 0; i < connections.length; i++) {
            var connection = connections[i];
            if (currentNode === connection[0] || currentNode === connection[1]) {
                var nextNode = (currentNode === connection[0]) ? connection[1] : connection[0];
                if (pathSoFar.indexOf(nextNode) === -1) {
                    pathSoFar.push(nextNode);
                    weightSoFar.push(Number(connection[2]));
                    findPaths(pathSoFar.slice(), weightSoFar.slice());
                    pathSoFar.pop();
                    weightSoFar.pop();
                };
            };
        };
    };

    if (paths.length > 0) {
        pathWeights = pathWeights.map(element => element.reduce((pv, v) => pv + v));

        var minWeight = pathWeights[0]; minWeightIndex = 0;
        for (var i = 1; i < pathWeights.length; i++) {
            var weight = pathWeights[i];
            if (weight < minWeight) {
                minWeight = weight;
                minWeightIndex = i;
            }
        }
        return paths[minWeightIndex].join('-');
    }
    else return -1;
};

console.log(WeightedPath(["4", "A", "B", "C", "D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"])); // A-B-D
console.log(WeightedPath(["4", "x", "y", "z", "w", "x|y|2", "y|z|14", "z|y|31"])); // -1