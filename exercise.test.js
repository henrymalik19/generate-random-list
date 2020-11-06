const { test, beforeAll, expect } = require('@jest/globals');
const exercise = require('./exercise.js');

const maxNumber = 10000;

describe('generateRandomList', () => {
    test('returns array of length max number', () => {
        const list = exercise.generateRandomList(maxNumber);

        expect(list).toBeTruthy();
        expect(list.length).toBe(maxNumber);
    });

    test('returned list should be in random order', () => {
        const listOne = exercise.generateRandomList(maxNumber);
        const listTwo = exercise.generateRandomList(maxNumber);

        expect(listOne).not.toEqual(listTwo);
    })

    test('each number should be unique', () => {
        const list = exercise.generateRandomList(maxNumber);

        list.forEach(number => {
            const fitleredList = list.filter(num => num === number);
            expect(fitleredList.length).toBe(1);
        })
    })

    test('list should be inclusive from 1 to maxNumber', () => {
        const list = exercise.generateRandomList(maxNumber);

        expect(list.includes(1)).toBeTruthy();
        expect(list.includes(maxNumber)).toBeTruthy();
    })
})
