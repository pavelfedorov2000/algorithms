// Бинарный поиск
// Сложность - O(log2n)
// Делим отсортированный(!) массив каждый раз пополам(пример со словарем)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length - 1;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count += 1;

        middle = Math.floor((start + end) / 2); // высчитываем индекс центрального элемента

        if (arr[middle] === item) {
            found = true;
            position = middle;
        }

        if (item < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(array, 8)); // 8
console.log(count); // 4

// 2 способ - рекурсивно
function recursiveBinarySearch(arr, item, start, end) {
    count += 1;

    let middle = Math.floor((start + end) / 2);

    if (item === arr[middle]) {
        return middle;
    }

    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(arr, item, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(array, 8, 0, array.length - 1)); // 8
console.log(count); // 4