develop:
	npx webpack-dev-server

install:
	npm install

build:
	rm -rf dist
	NODE_ENV=production npx webpack

test:
	npm test

lint:
	npx eslint .

.PHONY: test
