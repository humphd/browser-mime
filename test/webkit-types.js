module.exports = {
    browser: 'WebKit',
    mimeTypes: [
        // based on https://github.com/WebKit/webkit/blob/8e95493b2c7ce6ceb07b3d61f256741714482d07/Source/WebCore/platform/MIMETypeRegistry.cpp
        { type: 'image/gif', extensions: 'gif' },
        { type: 'image/jpeg', extensions: 'jpg' },
        { type: 'image/bmp', extensions: 'bmp' },
        { type: 'image/png', extensions: 'png' },
        { type: 'image/webp', extensions: 'webp' },
        { type: 'image/svg+xml', extensions: 'svg' },

        { type: 'application/javascript', extensions: 'js' },
        { type: 'application/json', extensions: 'json' },

        { type: 'text/html', extensions: 'html' },
        { type: 'text/xml', extensions: 'xml' },
        { type: 'text/plain', extensions: 'txt' },
        { type: 'application/xml', extensions: 'xml,xsl' },
        { type: 'application/xhtml+xml', extensions: 'xhtml' },

        { type: 'application/rss+xml', extensions: 'rss' },
        { type: 'application/atom+xml', extensions: 'atom' },

        { type: 'application/pdf', extensions: 'pdf' },

        { type: 'font/woff', extensions: 'woff' },
        { type: 'font/woff2', extensions: 'woff2' },
        { type: 'font/otf', extensions: 'otf' },
        { type: 'font/ttf', extensions: 'ttf' },
        
        { type: 'application/ogg', extensions: 'ogx' },
        { type: 'audio/ogg', extensions: 'ogg,oga' },
        { type: 'video/ogg', extensions: 'ogv' },

        { type: 'video/webm', extensions: 'webm' },

        { type: 'audio/mp3', extensions: 'mp3' }
    ]
};
