// Поиск в ширину
// FIFO - first in first out (магазин) - очередь

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
    let queue = [];
    queue.push(start);

    while (queue.length > 0) {
        let current = queue.shift();

        if (!graph[current]) {
            graph[current] = [];
        }

        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
}

console.log(breadthSearch(graph, 'a', 'g'));

// 1) queue = ['a']; current = 'a';
// 2) queue = ['b', 'c']; current = 'b'
// 3) queue = ['c', 'f']; current = 'c'
// 4) queue = ['f', 'd', 'e']; current = 'f'
// 5) queue = ['d', 'e', 'g']; current = 'd'
// 6) queue = ['e', 'g', 'f']; current = 'e'
// 7) queue = ['g', 'f', 'f']; current = 'g'
// 8) queue = ['f', 'f']; current = 'f'
// 9) queue = ['f', 'g']; current = 'f'
// graph['f'].includes('g') === true