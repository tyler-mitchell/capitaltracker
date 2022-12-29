#!/bin/sh

if nx print-affected --select=projects | sed "s/, /\n/g" | grep -E "^api$|^rust-[^,]*|^desktop$"; then
    echo "RUST=true"
fi

nx format --libs-and-apps
nx workspace-lint
yarn affected build --parallel "$1"
yarn affected lint --parallel "$1"
yarn affected test --parallel "$1"
yarn affected e2e --parallel 1
