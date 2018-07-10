MAKEFLAGS = -j1

CACHE = ".cache"
PUBLIC = "public"
ESLINT_FILES = "**/*.js"
PRETTIER_FILES = "**/*.{md,css,js,json}"

DONE = echo [ooo-generator] ✓ $@ done

.PHONY: default \
	clean \
	wipe \
	install \
	lint \
	format \
	build \
	deploy \
	develop \

default:
	echo "Please enter a command..."
	$(DONE)

$(verbose).SILENT:

clean:
	rm -rf npm-debug.log
	rm -rf $(PUBLIC)
	$(DONE)

wipe: clean
	rm -rf node_modules
	rm -rf $(CACHE)
	$(DONE)

install: wipe
	npm install
	$(DONE)

lint:
	npm run eslint -- $(ESLINT_FILES)
	$(DONE)

format:
	npm run prettier -- --write $(PRETTIER_FILES)
	$(DONE)

build: clean
	npm run gatsby -- build
	$(DONE)

deploy: build
	npm run gh-pages -- -d $(PUBLIC)
	$(DONE)

develop:
	npm run gatsby -- develop
	$(DONE)
