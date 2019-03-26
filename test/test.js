const assert = require('assert');
const mime = require('..');
const mimeDatabase = require('../dist/browser-mime-db.json');
const chromiumTypes = require('./chromium-types');
const webkitTypes = require('./webkit-types');

[chromiumTypes, webkitTypes].forEach((browserType) => {
    const { browser, mimeTypes } = browserType;
    
    describe(`${browser} MIME Types`, () => {
        mimeTypes.forEach(mimeType => {
            let { type, extensions } = mimeType;

            // Make sure the mime type exists in our browser db
            it(`supports '${mimeType.type}'`,
                () => assert(mimeDatabase[type]));
            
            // Also check that all of the associated extensions have types
            extensions = extensions.split(',');
            extensions.forEach(ext => {
                it(`supports '${ext}' extension for '${mimeType.type}'`,
                    () => assert(mime.lookup(ext))
                );      
            });
        });
    });    
});
