import { randomInt } from "./random-number";
import { randomString } from "./random-string";

function main() {
    console.log(`random number between 1 - 5: ${randomInt(1, 5)}`);
    console.log(`random string with a length of 5: ${randomString(5)}`);
}

main();
