#!/bin/sh

nx_exec() {
    npx nx affected --parallel --target "$1"
}

nx format
nx workspace-lint
nx_exec build
nx_exec lint
nx_exec format
nx_exec test
nx_exec e2e
