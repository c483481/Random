import { Bench } from "tinybench";
import { randomString } from "../random-string";

async function main() {
    const bench = new Bench({ time: 100 });
    const successCases: {
        id: number;
        input: number;
    }[] = [
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

    successCases.map((value) => {
        bench.add(`id: ${value.id}`, () => {
            randomString(value.input);
        });
    });

    await bench.warmup();
    await bench.run();

    console.log("Random string result");
    console.table(bench.table());
}

main();
