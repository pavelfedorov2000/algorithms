// Словарь, карта, map
// Обычный объект, но ключи могут быть любыми значениями

const map = new Map();
const objKey = { id: 5 };
map.set(objKey, "ulbi tv");
console.log(map);
console.log(map.get(objKey)); // "ulbi tv"


// Коллекция уникальных значений
const set = new Set();
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(3);
console.log(set); // 5 4 3
console.log([...set]); // [5, 4, 3]
console.log([...set].sort((a, b) => a - b)); // [3, 4, 5]