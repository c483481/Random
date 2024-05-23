import * as RandomNumber from "../random-number";

const { randomInt } = jest.requireActual<typeof RandomNumber>("../random-number.ts");

interface SuccessCaseRandomInt {
    id: number;
    input: {
        min: number;
        max: number;
    };
}

const successCases: SuccessCaseRandomInt[] = [
    {
        id: 0,
        input: {
            min: 1,
            max: 5,
        },
    },
    {
        id: 1,
        input: {
            min: 3,
            max: 5,
        },
    },
    {
        id: 2,
        input: {
            min: 2,
            max: 10,
        },
    },
    {
        id: 3,
        input: {
            min: 100,
            max: 200,
        },
    },
];

describe("Test Function", () => {
    it.each(successCases)("success case $id", ({ input }) => {
        const { min, max } = input;
        const randomNumber = randomInt(min, max);
        expect(randomNumber <= max || randomNumber >= min).toBeTruthy();
    });
});
