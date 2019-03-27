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
        
        // Ogg
        { type: 'application/ogg', extensions: 'ogx' },
        { type: 'audio/ogg', extensions: 'ogg,oga' },
        { type: 'video/ogg', extensions: 'ogv' },

        // WebM
        { type: 'video/webm', extensions: 'webm' },

        // MPEG
//        { type: 'audio/mpeg', extensions: 'm1a,m2a,m1s,mpa' },
//        { type: 'video/mpeg', extensions: 'mpg,m15,m1s,m1v,m75,mpa,mpeg,mpm,mpv' },

        // MPEG-4
//        { type: 'video/x-m4v', extensions: 'm4v' },
//        { type: 'audio/x-m4a', extensions: 'm4a' },
//        { type: 'audio/x-m4b', extensions: 'm4b' },
//        { type: 'audio/x-m4p', extensions: 'm4p' },
//        { type: 'audio/mp4', extensions: 'm4a' },

        // MP3
        { type: 'audio/mp3', extensions: 'mp3' }
    ]
};
