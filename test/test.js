const assert = require('assert');
const mime = require('..');
const mimeDatabase = require('../dist/browser-mime-db.json');
const chromiumTypes = require('./chromium-types');
const webkitTypes = require('./webkit-types');

function add(a, b) {
    return (+a) + (+b);
}

describe('Adding two numbers together', function() {
    it('should sum two whole numbers', function() {
        assert.strictEqual(add(2, 2), 4);
    });

    it('should convert strings to numbers', function() {
        assert.strictEqual(add("2", "2"), 4);
    });
});

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
