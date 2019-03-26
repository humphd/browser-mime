# browser-mime

MIME types for use in browsers.

To rebuild the JS library in `dist/`:

```
npm build
```

To generate the database:

```
npm run build-db
```

This will reproduce [`browser-mime-db.json`](browser-mime-db.json)
by attempting to load an empty file of every type in [mime-db](https://www.npmjs.com/package/mime-db), and keep track of which ones Chrome was able to download
and use vs. prompting the user with a Download popup.

The [mime-types](https://github.com/jshttp/mime-types.git) project is included as a squashed subtree in [mime-types/](mime-types). To update the subtree code use `npm run update-mime-types`.
