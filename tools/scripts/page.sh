#!/bin/sh

page="$1"

nx generate @nrwl/next:component "$page" --project=pages --export -s=css

nx generate @nrwl/react:component-story --componentPath=lib/"$page"/"$page".tsx --project=pages

nx generate @nrwl/react:component-cypress-spec --componentPath=lib/"$page"/"$page".tsx --project=pages

nx format
