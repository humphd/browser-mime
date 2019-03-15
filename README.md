# browser-mime

MIME types for use in browsers

To generate the database:

```
npm install
npm run build
```

This will reproduce [`browser-mime-db.json`](browser-mime-db.json)
by attempting to load an empty file of every type in [mime-db](https://www.npmjs.com/package/mime-db), and keep track of which ones Chrome was able to download
and use vs. prompting the user with a Download popup.
