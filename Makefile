install:
	npm install

test:
	npm run test

lint:
	npm run eslint -- src test

.PHONY: test
