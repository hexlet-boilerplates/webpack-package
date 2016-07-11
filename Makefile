install:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm run test

lint:
	npm run eslint -- src test

publish:
	npm publish

.PHONY: test
