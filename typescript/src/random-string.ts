import { randomBytes } from "crypto";

export function randomString(len: number): string {
    const bytes = randomBytes(Math.ceil(len / 2));
    return bytes.toString("hex").slice(0, len);
}
