#!/bin/sh

nx_exec() {
    NEXT_TELEMETRY_DISABLED=1 \
    NX_CLOUD_DISTRIBUTED_EXECUTION=false \
    npx nx affected --parallel --target "$1"
}

if npx nx print-affected --select=projects | sed "s/, /\n/g" | grep -E "^api$|^rust-[^,]*|^desktop$"; then
    echo "RUST=true"
fi

NX_CLOUD_DISTRIBUTED_EXECUTION=false npx nx format  --libs-and-apps
NX_CLOUD_DISTRIBUTED_EXECUTION=false npx nx workspace-lint
nx_exec build
nx_exec lint
nx_exec format
nx_exec test
nx_exec e2e
