#!/usr/bin/env sh

set -e

rm -rf docs

cd content

npm run build

mv .vuepress/dist ../docs

cd -

echo 'dokov.bg' > docs/CNAME

git add -A
git commit -m 'deploy'

git push git@github.com:ivandokov/dokov.bg.git master
