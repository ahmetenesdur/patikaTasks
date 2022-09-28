// Hamiltonian Path

function HamiltonianPath(strArr) {
    const vertices = strArr[0].slice(1, -1).split(',');
    const edges = strArr[1].slice(1, -1).split(',');
    const path = strArr[2].slice(1, -1).split(',');
    const graph = {};

    for (let i = 0; i < vertices.length; i++) {
        graph[vertices[i]] = [];
    }
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i].split('-');
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }
    for (let i = 0; i < path.length - 1; i++) {
        if (!graph[path[i]].includes(path[i + 1])) return path[i];
    }

    return 'yes';
}

console.log(HamiltonianPath(["(A,B,C,D)", "(A-B,A-D,B-D,A-C)", "(C,A,D,B)"])); // yes
console.log(HamiltonianPath(["(A,B,C)", "(B-A,C-B)", "(C,B,A)"])); // yes
console.log(HamiltonianPath(["(X,Y,Z,Q)", "(X-Y,Y-Q,Y-Z)", "(Z,Y,Q,X)"])); // Q