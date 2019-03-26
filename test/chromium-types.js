module.exports = {
    browser: 'Chromium',
    mimeTypes: [
        // based on https://chromium.googlesource.com/chromium/src/+/94493c6554081529c04eea5b97a1f2ff2649e4a8/net/base/mime_util.cc
        { type: 'video/webm', extensions: 'webm' },
        { type: 'application/wasm', extensions: 'wasm' },
        { type: 'application/xhtml+xml', extensions: 'xhtml,xht,xhtm' },
        { type: 'audio/x-flac', extensions: 'flac' }, // humphd: changed to x-flac
        { type: 'audio/mp3', extensions: 'mp3' },
        { type: 'audio/ogg', extensions: 'ogg,oga' }, // humphd: removed opus extension
        { type: 'audio/wav', extensions: 'wav' },
        { type: 'audio/x-m4a', extensions: 'm4a' },
        { type: 'image/gif', extensions: 'gif' },
        { type: 'image/jpeg', extensions: 'jpeg,jpg' },
        { type: 'image/png', extensions: 'png' },
        { type: 'image/apng', extensions: 'apng' }, // humphd: added apng
        { type: 'image/webp', extensions: 'webp' },
        { type: 'text/css', extensions: 'css' },
        { type: 'text/html', extensions: 'html,htm,shtml,shtm' },
        { type: 'text/plain', extensions: 'txt,text' },
        { type: 'text/xml', extensions: 'xml,xsl' },
        { type: 'video/mp4', extensions: 'mp4,m4v' },
        { type: 'video/ogg', extensions: 'ogv,ogm' },
        { type: 'image/x-icon', extensions: 'ico' },
        { type: 'application/epub+zip', extensions: 'epub' },
        { type: 'application/font-woff', extensions: 'woff' },
        { type: 'application/gzip', extensions: 'gz,tgz' },
        { type: 'application/javascript', extensions: 'js' },
        { type: 'application/json', extensions: 'json' },  // Per http://www.ietf.org/rfc/rfc4627.txt.
        { type: 'application/pdf', extensions: 'pdf' },
        { type: 'application/zip', extensions: 'zip' },
        { type: 'image/bmp', extensions: 'bmp' },
        { type: 'image/svg+xml', extensions: 'svg,svgz' },
        { type: 'video/mpeg', extensions: 'mpeg,mpg' }
    ]
};

