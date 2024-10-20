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

const arr = [1, 2, 3, 4, 5];
const arr3 = ["cat", "sheep", "dog", "wolf", "dragon"];
const arr2 = [];
const arr4 = [];
const filter = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const index = i;
    callback(element, index);
  }
  if (typeof array[0] === "number") {
    return arr2;
  } else {
    return arr4;
  }
};
const callbackk = (element, index) => {
  if (typeof element === "number") {
    if (index % 2 === 0) {
      arr2.push(element);
    }
  } else {
    if (element.length > 3) {
      arr4.push(element);
    }
  }
};

console.log(filter(arr, callbackk));
console.log(filter(arr3, callbackk));