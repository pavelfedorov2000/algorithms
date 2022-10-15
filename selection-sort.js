// Сортировка выбором
// Сложность - O(n * n)
// Находим на каждой итерации цикла минимальный элемент

const array = [-1, -2, -3, 0, 5, 2, 3, 10, -5, -6, 11, 1, -10, 12, -11, 13, -12, 14, -13, 15, -14, 16, -15, 17];
let count = 0;

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) { // внешний цикл - нужен только чтобы найти минимальный индекс
        let indexMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }

            count += 1;
        }

        let tmp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = tmp;
    }

    return arr;
}

console.log(selectionSort(array));
console.log(count); // 276
