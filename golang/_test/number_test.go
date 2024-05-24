package random_test

import (
	"fmt"
	"github.com/stretchr/testify/require"
	"random/random"
	"testing"
)

func TestRandomNumber(t *testing.T) {
	tests := []struct {
		name string
		min  int
		max  int
	}{
		{
			name: "_test 1",
			min:  1,
			max:  5,
		},
		{
			name: "_test 2",
			min:  3,
			max:  5,
		},
		{
			name: "_test 3",
			min:  2,
			max:  10,
		},
		{
			name: "_test 4",
			min:  100,
			max:  200,
		},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result := random.Int(test.min, test.max)
			require.Equal(t, true, result >= test.min && result <= test.max, fmt.Sprintf("result must be greater or euqal than %d and less or equal than %d", test.min, test.max))
		})
	}
}
