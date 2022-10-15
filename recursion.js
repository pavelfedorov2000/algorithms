// Рекурсия - вызов фуекции самой себя
// Всегда должна иметь условия выхода, чтобы не произошло переполнение стека вызова

// Факторил
// !1 = 1
// !2 = 1 * 2 = 2
// !3 = 1 * 2 * 3 = 6

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Числа Фибоначчи
// 1, 1, 2, 3, 5, 8, 13, 21
const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8)); // 21