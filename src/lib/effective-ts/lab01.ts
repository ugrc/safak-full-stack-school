function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

stringArray[0].split("");

console.log(updatedArray);

let numbers = [1,2,3]

let numbersA: Array<number> = [1,2,3]


