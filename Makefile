base_version := $(jq -r .version < package.json)
ifeq ($(run_number),)
	final_version = $ $(base_version)-$(git_rev)
else
	# make a unique version number as we cant republish
	final_version = $(base_version)-$(run_number)
endif


dist: node_modules
	yarn build

node_modules:
	yarn

clean:
	rm -rf node_modules
	rm -rf dist
	rm -f yarn.lock

publish: dist
	yarn publish --new-version $(final_version)

.PHONY: clean publish dist