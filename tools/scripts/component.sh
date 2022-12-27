#!/bin/sh

component="$1"

nx generate @nrwl/next:component "$component" --project=components --export

nx generate @nrwl/react:component-story --componentPath=lib/"$component"/"$component".tsx --project=components

nx generate @nrwl/react:component-cypress-spec --componentPath=lib/"$component"/"$component".tsx --project=components

nx format
