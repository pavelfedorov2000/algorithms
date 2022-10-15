// Пузырьковая сортировка (всплытие)
// Сложность - O(n * n) но без кэфа впереди
// Попарно сравниваем 2 близлижащих элемента
// Одна из самых неэффективных

const array = [-1, -2, -3, 0, 5, 2, 3, 10, -5, -6, 11, 1, -10, 12, -11, 13, -12, 14, -13, 15, -14, 16, -15, 17];
let count = 0;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }

            count += 1;
        }
    }

    return arr;
}

console.log(bubbleSort(array));
console.log(count); // 576
console.log(array.length); // 24
console.log(Math.pow(array.length, 2)); // 576 = 576