/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray.push(array[index]);    
  }

  for (let index = 0; index < array.length; index++) {
    let repeat = 0;

    for (let k = 0; k < newArray.length; k++) {
      if (newArray[k] === array[index]) {
        repeat++;
      }

      if (repeat === 2) {
        newArray.splice(k, 1);
        repeat--;
      }
      
    }
    
  }

  return newArray;
}

let arr = findUniqueElements([1, 2, 3, 2,2,2, 1,2 ,4]);

console.log(arr);

console.log(findUniqueElements([1, 2, 2, 3, 2, 4]));






