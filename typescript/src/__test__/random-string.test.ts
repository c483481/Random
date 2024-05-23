import * as RandomString from "../random-string";

const { randomString } = jest.requireActual<typeof RandomString>("../random-string.ts");

interface SuccessCaseRandomStr {
    id: number;
    input: number;
}

const successCases: SuccessCaseRandomStr[] = [
    {
        id: 0,
        input: 5,
    },
    {
        id: 1,
        input: 9,
    },
    {
        id: 2,
        input: 15,
    },
    {
        id: 3,
        input: 30,
    },
];

describe("Test Function", () => {
    it.each(successCases)("success case $id", ({ input }) => {
        const randomStr = randomString(input);
        expect(randomStr.length).toEqual(input);
    });
});
