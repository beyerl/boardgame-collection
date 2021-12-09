#!/bin/bash

ng build --base-href=boardgame-collection
git add -A
git commit -m "build and deploy"
git push
git subtree push --prefix dist origin gh-pages