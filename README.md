# browser-mime [![Build Status](https://travis-ci.org/humphd/browser-mime.svg?branch=master)](https://travis-ci.org/humphd/browser-mime)

MIME types that can be parsed/rendered in most browsers.  The list is automatically
generated from [mime-db](https://github.com/jshttp/mime-db).  Manual types and
extension information is also included in [src/initial-db.json](src/initial-db.json).

To rebuild the JS library in `dist/`:

```
npm build
```

To regenerate the database:

```
npm run build-db
```

This will reproduce [`browser-mime-db.json`](dist/browser-mime-db.json)
by attempting to load an empty file of every type in [mime-db](https://www.npmjs.com/package/mime-db), and keep track of which ones Chrome was able to download
and use vs. prompting the user with a Download popup.

The [mime-types](https://github.com/jshttp/mime-types.git) project is included as a squashed subtree in [mime-types/](mime-types). To update the subtree code use `npm run update-mime-types`.

## API

The API is identical too, and shares the same code as, [mime-types](https://github.com/jshttp/mime-types.git).  From their README:

```js
var mime = require('mime-types')
```

All functions return `false` if input is invalid or not found.

### mime.lookup(path)

Lookup the content-type associated with a file.

```js
mime.lookup('json')             // 'application/json'
mime.lookup('.md')              // 'text/markdown'
mime.lookup('file.html')        // 'text/html'
mime.lookup('folder/file.js')   // 'application/javascript'
mime.lookup('folder/.htaccess') // false

mime.lookup('cats') // false
```

### mime.contentType(type)

Create a full content-type header given a content-type or extension.
When given an extension, `mime.lookup` is used to get the matching
content-type, otherwise the given content-type is used. Then if the
content-type does not already have a `charset` parameter, `mime.charset`
is used to get the default charset and add to the returned content-type.

```js
mime.contentType('markdown')  // 'text/x-markdown; charset=utf-8'
mime.contentType('file.json') // 'application/json; charset=utf-8'
mime.contentType('text/html') // 'text/html; charset=utf-8'
mime.contentType('text/html; charset=iso-8859-1') // 'text/html; charset=iso-8859-1'

// from a full path
mime.contentType(path.extname('/path/to/file.json')) // 'application/json; charset=utf-8'
```

### mime.extension(type)

Get the default extension for a content-type.

```js
mime.extension('application/octet-stream') // 'bin'
```

### mime.charset(type)

Lookup the implied default charset of a content-type.

```js
mime.charset('text/markdown') // 'UTF-8'
```

### var type = mime.types[extension]

A map of content-types by extension.

### [extensions...] = mime.extensions[type]

A map of extensions by content-type.
