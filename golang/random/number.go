package random

import (
	"crypto/rand"
	"math/big"
)

func Int(min int, max int) int {
	nBig, _ := rand.Int(rand.Reader, big.NewInt(int64(max-min+1)))

	return min + int(nBig.Int64())
}
