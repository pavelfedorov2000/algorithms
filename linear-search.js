// Линейный поиск
// Сложность - O(n)
// В худшем случае мы проходимся по всему массиву

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        count += 1;

        if (arr[i] === item) {
            return i;
        }
    }

    return null;
}

console.log(linearSearch(array, 10)); // 9 
console.log(count); // 10