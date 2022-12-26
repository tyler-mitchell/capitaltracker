#!/usr/bin/env bash

dir=$(dirname "$0")
dir=$(dirname "$dir")
dir=$(dirname "$dir")
dir="$dir/libs/node-api-models/src/lib/api"
index="$dir/index.ts"
files=$(ls "$dir")
files=$(echo "$files" | grep -v index.ts)

[ -f "$index" ] && rm "$index"

while read -r file; do
  echo "export * from './${file%.ts}';" >> "$index"
done <<< "$files"
