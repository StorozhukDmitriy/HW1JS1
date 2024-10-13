/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

const numbers = [1, 2, 3, 4, 5];
//функция фильтр
const arr = [];
const filter = (numbers, callback) => {
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const index = i;
    callback(element, index);
  }
  return arr;
};
const callback = (element, index) => {
  if (index % 2 === 0) {
    return arr.push(element);
  }
};

console.log(filter(numbers, callback)); // Должен вывести: [1, 3, 5]

// const arr = [1, 2, 3, 4, 5];
// const arr3 = ["cat", "sheep", "dog", "wolf", "dragon"];
// const arr2 = [];
// const filter = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const index = i;
//     callback(element, index);
//   }
//   return arr2;
// };
// const callbackk = (element, index) => {
//   if (typeof element === "number") {
//     if (index % 2 === 0 || element) {
//       arr2.push(element);
//     }
//   } else if (typeof element === "string") {
//     if (element.length > 3) {
//       arr2.push(element);
//     }
//   }
// };
// console.log(filter(arr, callbackk));
// console.log(filter(arr3, callbackk));
