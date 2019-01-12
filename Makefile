install: install-deps install-flow-typed

develop:
	npx webpack-dev-server --open

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
	npx flow

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
