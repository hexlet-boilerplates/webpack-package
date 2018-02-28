install: install-deps install-flow-typed

start:
	npm start

develop:
	npm run webpack -- --watch --env development

install-deps:
	npm install

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run webpack -- -p --env production

test:
	npm test

check-types:
	npm run flow

lint:
	npm run eslint .

publish:
	npm publish

.PHONY: test
