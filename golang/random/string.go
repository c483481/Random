package random

import (
	"strings"
)

const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
const lengthLetter = len(letterBytes)

func String(n int) string {
	sb := strings.Builder{}
	sb.Grow(n)

	randomNumber := 0
	for i, remaining := n-1, 0; i >= 0; i-- {
		if remaining == 0 {
			randomNumber, remaining = Int(100000000, 999999999), 5
		}

		idx := randomNumber & (lengthLetter - 1)

		sb.WriteByte(letterBytes[idx])
		randomNumber >>= 6
		remaining--
	}

	return sb.String()
}
