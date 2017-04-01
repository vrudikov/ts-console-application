PREFIX=./node_modules/.bin

node_modules: package.json
	npm install

test: node_modules
	JASMINE_CONFIG_PATH=jasmine.json $(PREFIX)/jasmine-ts