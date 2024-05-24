package main

import (
	"fmt"
	"random/random"
)

func main() {
	fmt.Printf("random number between 1 - 5: %d\n", random.Int(1, 5))
	fmt.Printf("random string with a length of 5: %s", random.String(5))
}
