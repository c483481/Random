package random

import (
	"fmt"
	"github.com/stretchr/testify/require"
	"random/random"
	"testing"
)

func TestRandomString(t *testing.T) {
	tests := []struct {
		name  string
		input int
	}{
		{
			name:  "_test 1",
			input: 5,
		},
		{
			name:  "_test 2",
			input: 9,
		},
		{
			name:  "_test 3",
			input: 15,
		},
		{
			name:  "_test 4",
			input: 30,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result := random.String(test.input)
			require.Equal(t, test.input, len(result), fmt.Sprintf("length result must be same as input value"))
		})
	}
}

func BenchmarkRandomString(b *testing.B) {
	tests := []struct {
		name  string
		input int
	}{
		{
			name:  "_test 1",
			input: 5,
		},
		{
			name:  "_test 2",
			input: 9,
		},
		{
			name:  "_test 3",
			input: 15,
		},
		{
			name:  "_test 4",
			input: 30,
		},
	}
	for _, test := range tests {
		b.Run(test.name, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				random.String(test.input)
			}
		})
	}

}
