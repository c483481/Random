import { Bench } from "tinybench";
import { randomInt } from "../random-number";

async function main() {
    const bench = new Bench({ time: 100 });
    const successCases: {
        id: number;
        input: {
            min: number;
            max: number;
        };
    }[] = [
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

    successCases.map((value) => {
        bench.add(`id: ${value.id}`, () => {
            const { min, max } = value.input;
            randomInt(min, max);
        });
    });

    await bench.warmup();
    await bench.run();

    console.log("Random number result");
    console.table(bench.table());
}

main();
