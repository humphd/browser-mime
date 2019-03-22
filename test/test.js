const assert = require('assert');
const mime = require('..');
const chromiumTypes = require('./chromium-types');
const firefoxTypes = require('./firefox-types');
const webkitTypes = require('./webkit-types');

[chromiumTypes, firefoxTypes, webkitTypes].forEach((browserType) => {
    const { browser, mimeTypes } = browserType;

    function validateMimeType(mimeType) {
        const fullMimeType = mime.contentType(mimeType);
    
        if(!fullMimeType) {
            return false;
        }
    
        // Ignore charset suffix if present
        return fullMimeType.startsWith(mimeType);
    }
    
    describe(`${browser} MIME Types`, () => {
        mimeTypes.forEach(mimeType => {
            it(`Should support ${browser}'s '${mimeType.type}'`, () => {
                let { type, extensions } = mimeType;
                if(extensions) {
                    extensions = extensions.split(',');
                    extensions.forEach((ext) => {
                        assert.strictEqual(mime.lookup(ext), type);
                    });
                }
                assert(validateMimeType(type))
            });
        });
    });    
});
