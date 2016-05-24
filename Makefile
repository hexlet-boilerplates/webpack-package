install:
	npm install

build:
	npm run build

test:
	npm run test

lint:
	npm run eslint -- src test

.PHONY: test
