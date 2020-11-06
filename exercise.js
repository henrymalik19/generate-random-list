// Returns random list of "maxNumber" of elements
function generateRandomList(maxNumber) {
    const numbers = []; // Empty Array to store numbers

    // Cycle through all numbers from 1 to {maxNumber}
    for (let number = 1; number <= maxNumber; number++) {
        // Get random rounded number from 0 to the length of the array
        const randomIdx = Math.round((Math.random() * numbers.length));
        // add number to the array at randomIdx
        numbers.splice(randomIdx, 0, number);
    }

    return numbers;
}

module.exports.generateRandomList = generateRandomList;