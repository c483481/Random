run:
	go run .

lint:
	golangci-lint run

test:
	go test -coverpkg=./... ./_test -coverprofile=coverage.out -v

watch_test:
	go tool cover -html=coverage.out