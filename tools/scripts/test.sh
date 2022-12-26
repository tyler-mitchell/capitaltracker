#!/bin/sh

nx_exec() {
    nx affected --skip-nx-cache --target "$1"
}

if nx print-affected --select=projects | sed "s/, /\n/g" | grep -E "^api$|^rust-[^,]*|^desktop$"; then
    echo "RUST=true"
fi

nx format --libs-and-apps
nx workspace-lint
nx_exec build
nx_exec lint
nx_exec format
nx_exec test
nx_exec e2e
