# Publishing Task Deck

## GitHub release

1. Update `version` in `package.json`.
2. Update `CHANGELOG.md`.
3. Run:

```bash
node --check client.js
node --check index.js
scripts/pack-release.sh
```

4. Create a tag and release:

```bash
git tag v<version>
git push origin main --tags
gh release create v<version> \
  --title "Task Deck v<version>" \
  --notes-file CHANGELOG.md \
  dsh-task-deck-<version>.tgz
```

Recipients install the release asset through their DSH agent:

```text
plugin_manager install_bundle /absolute/path/to/dsh-task-deck-<version>.tgz
```

## npm

The repository package currently keeps `"name": "@local/dsh-task-deck"` and `"private": true` to avoid accidental publication.

To publish:

1. Change `name` to a public scope, for example `@yourname/dsh-task-deck`.
2. Set `"private": false`.
3. Keep `"license": "MIT"`, `repository`, `homepage`, and `engines.dsh`.
4. Check the packed file list:

```bash
npm pack --dry-run
```

5. Publish:

```bash
npm login
npm publish --access public
```

Recipients install with the npm spec:

```text
plugin_manager install_bundle @yourname/dsh-task-deck
```

## Official Discover

Publishing to npm does not automatically list the bundle in DSH Discover. Discover is a curated/official catalog. A third-party bundle can be shared by npm spec or GitHub release first; official listing requires the DSH catalog review process.

## Release checklist

- [ ] `version` and `CHANGELOG.md` agree.
- [ ] `node --check client.js` passes.
- [ ] JSON manifests parse.
- [ ] A clean DSH profile can install, open Dashboard, open Thread, fork a session, and uninstall.
- [ ] No transcript data is uploaded.
- [ ] License and privacy notes are current.
- [ ] Release asset includes `client.js`, `index.js`, `cordis.patch.yml`, `locale/*.json`, `icon.svg`, `README.md`, `LICENSE`, and `package.json`.
