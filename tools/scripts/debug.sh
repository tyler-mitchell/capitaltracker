#!/bin/sh

yarn failed build
yarn failed lint
yarn failed format
yarn failed test
yarn failed e2e
