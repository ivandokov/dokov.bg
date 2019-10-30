#!/usr/bin/env sh

set -e

rm -rf docs

npm run build

mv src/.vuepress/dist docs

echo 'dokov.bg' > docs/CNAME

git add -A
git commit -m 'deploy'

git push git@github.com:ivandokov/dokov.bg.git master
