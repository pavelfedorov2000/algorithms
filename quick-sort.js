// Быстрая сортировка (сортировка Хоара)
// Сложность - O(log2n * n)
// Разделяем массив на массив с меньшими чем опорный элемент числами и большими
// Одна из самых эффективных

const array = [-1, 4, -5, 6, 2, -3, 0, 10, -13, 14, 52, -2, 33, 23, 17, -4, 46, 39, -20, 43, 53, 84, 1, 5];
let count = 0;

function quickSort(arr) {
    // базовый случай выхода из рекурсии
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        count += 1;

        if (i === pivotIndex) {
            continue
        }

        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]; // рекурсия
}

console.log(quickSort(array));
console.log(count); // 106