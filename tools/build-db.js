const fs = require('fs');
const chalk = require('chalk');
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

// Our new browser mime db.  We pre-seed it with some types we know should
// exist, but don't necessarily follow the design of our automated test below.
const browserMime = require('../src/initial-db.json');

async function processAllMimeTypes(browser) {
    const port = server.start();

    async function testMimeType(mimeType) {
        return new Promise(async (resolve) => {
            const page = await browser.newPage();

            // Wait on something to get logged to the console (see views/public/index.js)
            page.on('console', async msg => {
                let supported;
                try {
                    let result = JSON.parse(msg.text());
    
                    // We write a JSON string like {"mimeType": "text/plain", "supported": true},
                    // try to parse it and see if we should log it (success only).
                    supported = result.supported;
                    
                    await page.close();
                    resolve(supported);
                } catch(e) {
                    console.warn(chalk.gray(`Ignoring JSON parsing error for mime type='${mimeType}': ${msg.text()}`));
                }
            });
        
            await page.goto(`http://localhost:${port}/?mimeType=${encodeURIComponent(mimeType)}`);
        });
    }

    // Loop through all mime type keys, and print any that are supported, with extensions
    for(const mimeType of Object.keys(mime)) {
        // Skip any types we already have pre-seeded in the db
        if(browserMime[mimeType]) {
            console.log(chalk.green(`${mimeType} - supported (manually included)`));
            continue;
        }

        const supported = await testMimeType(mimeType);
        if(!supported) {
            console.log(chalk.red(`${mimeType} - not supported`));
        } else {
            // Record this in our new db object
            const mimeInfo = mime[mimeType];
            if(mimeInfo.extensions) {
                // Strip out the .source and .compressible properties.
                // We don't need them (or the extra size)
                delete mimeInfo.source;
                delete mimeInfo.compressible;
                browserMime[mimeType] = mimeInfo;
                console.log(chalk.green(`${mimeType} - supported`));
            } else {
                console.log(chalk.yellow(`${mimeType} - supported, but no extensions, ignoring`));
            }
        }
    }

    // Write out the new db file
    const json = JSON.stringify(browserMime, null, 2);
    fs.writeFile('dist/browser-mime-db.json', json, async (err) => {
        if(err) {
            console.error(chalk.red('Unable to write browser-mime-db.json'), err.message);
        } else {
            console.log('Wrote browser-mime-db.json');
        }

        // Shut down our testing server and browser
        await browser.close();
        server.stop();    
    });
}

puppeteer.launch().then(processAllMimeTypes);
