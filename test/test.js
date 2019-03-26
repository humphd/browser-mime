const assert = require('assert');
const mime = require('..');
const mimeDatabase = require('../dist/browser-mime-db.json');
const chromiumTypes = require('./chromium-types');
const firefoxTypes = require('./firefox-types');
const webkitTypes = require('./webkit-types');

[chromiumTypes, /*firefoxTypes*/, /*webkitTypes*/].forEach((browserType) => {
    const { browser, mimeTypes } = browserType;
    
    describe(`${browser} MIME Types`, () => {
        mimeTypes.forEach(mimeType => {
            let { type, extensions } = mimeType;

            function validateMimeType(mimeType) {
                return mimeDatabase[mimeType];
            }
        
            it(`supports '${mimeType.type}'`, () => {
                assert(validateMimeType(type))
            });

            if(extensions) {
                extensions = extensions.split(',');
                extensions.forEach(ext => {
                    it(`supports '${ext}' extension for '${mimeType.type}'`, () => {
                        assert.strictEqual(mime.lookup(ext), type);
                    });        
                });
            }
        });
    });    
});
