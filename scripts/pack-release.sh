#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

VERSION="$(node -p "require('./package.json').version")"
OUT="${1:-dist}"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

mkdir -p "$OUT" "$STAGE/package/locale" "$STAGE/package/docs"
cp \
  package.json index.js client.js cordis.patch.yml \
  README.md README.zh.md LICENSE CHANGELOG.md icon.svg \
  "$STAGE/package/"
cp locale/*.json "$STAGE/package/locale/"
cp docs/*.md "$STAGE/package/docs/"

tar -czf "$OUT/dsh-task-deck-$VERSION.tgz" -C "$STAGE" package
echo "created $OUT/dsh-task-deck-$VERSION.tgz"
