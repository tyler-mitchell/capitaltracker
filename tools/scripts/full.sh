#!/bin/sh

nx format --libs-and-apps
nx workspace-lint
yarn all build
yarn all lint
yarn all format
yarn all test
yarn all e2e
