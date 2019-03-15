const fs = require('fs');
const puppeteer = require('puppeteer');
/**
 * The mime-db object is organized by mime type, and
 * records look like this (some fields might be missing):
 * 
 *   "application/json": {
 *     "source": "iana",
 *     "charset": "UTF-8",
 *     "compressible": true,
 *     "extensions": ["json","map"]
 *   }
 */
const mime = require('mime-db');
const server = require('./server');

// Our new browser mime db
const browserMime = {};

async function processAllMimeTypes(browser) {
    const port = server.start();

    async function testMimeType(mimeType) {
        return new Promise(async (resolve) => {
            const page = await browser.newPage();

            // Wait on something to get logged to the console (see views/public/index.js)
            page.once('console', msg => {
                try {
                    const result = JSON.parse(msg.text());
    
                    // We write a JSON string like {"mimeType": "text/plain", "supported": true},
                    // try to parse it and see if we should log it (success only).
                    resolve(result.supported);
                } catch(e) {
                    console.warn(`JSON parsing error for mime type='${mimeType}': ${msg.text()}`);
                    resolve(false);
                }
            });
        
            await page.goto(`http://localhost:${port}/?mimeType=${encodeURIComponent(mimeType)}`);
        });
    }

    // Loop through all mime type keys, and print any that are supported, with extensions
    for(const mimeType of Object.keys(mime)) {
        const supported = await testMimeType(mimeType);
        if(supported) {
            const extensions = mime[mimeType].extensions;
            console.log(mimeType);

            // Record this in our new db object
            browserMime[mimeType] = {};
            if(extensions) {
                browserMime[mimeType].extensions = extensions;
            }
        }
    }

    // Write out the new db file
    const json = JSON.stringify(browserMime, null, 2);
    fs.writeFile('../browser-mime-db.json', json, async (err) => {
        if(err) {
            console.error('Unable to write browser-mime-db.json', err.message);
        } else {
            console.log('Wrote browser-mime-db.json');
        }

        // Shut down our testing server and browser
        await browser.close();
        server.stop();    
    });
}

puppeteer.launch().then(processAllMimeTypes);
