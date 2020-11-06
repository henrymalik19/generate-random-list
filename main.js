const exercise = require('./exercise.js');

const maxNumber = 10000;
const numbersList = exercise.generateRandomList(maxNumber);

// Print out list
console.log(numbersList);

// Print out individually
numbersList.forEach(number => {
    console.log(number);
});