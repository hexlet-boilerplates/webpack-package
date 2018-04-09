install: install-deps install-flow-typed

develop:
	npm run webpack-serve

install-deps:
	npm install

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	NODE_ENV=production npm run webpack

test:
	npm test

check-types:
	npm run flow

lint:
	npm run eslint .

publish:
	npm publish

.PHONY: test
