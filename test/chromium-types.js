// https://chromium.googlesource.com/chromium/src/+/94493c6554081529c04eea5b97a1f2ff2649e4a8/net/base/mime_util.cc
module.exports = {
    browser: 'Chromium',
    mimeTypes: [
        // kPrimaryMappings:
        //
        //   Use this for mappings that are critical to the web platform.  Mappings you
        //   add to this list take priority over the underlying platform when converting
        //   from file extension -> MIME type.  Thus file extensions listed here will
        //   work consistently across platforms.
        { type: 'video/webm', extensions: 'webm' },
//humphd        { type: 'application/wasm', extensions: 'wasm' },
//humphd        { type: 'application/x-chrome-extension', extensions: 'crx' },
        { type: 'application/xhtml+xml', extensions: 'xhtml,xht,xhtm' },
        { type: 'audio/flac', extensions: 'flac' },
        { type: 'audio/mp3', extensions: 'mp3' },
        { type: 'audio/ogg', extensions: 'ogg,oga' }, // humphd: removed opus extension
        { type: 'audio/wav', extensions: 'wav' },
//humphd        { type: 'audio/webm', extensions: 'webm' },
        { type: 'audio/x-m4a', extensions: 'm4a' },
        { type: 'image/gif', extensions: 'gif' },
        { type: 'image/jpeg', extensions: 'jpeg,jpg' },
        { type: 'image/png', extensions: 'png' },
        { type: 'image/apng', extensions: 'apng' }, // humphd: added apng
        { type: 'image/webp', extensions: 'webp' },
        { type: 'multipart/related', extensions: 'mht,mhtml' },
        { type: 'text/css', extensions: 'css' },
        { type: 'text/html', extensions: 'html,htm,shtml,shtm' },
        { type: 'text/javascript', extensions: 'js,mjs' },
        { type: 'text/xml', extensions: 'xml' },
        { type: 'video/mp4', extensions: 'mp4,m4v' },
        { type: 'video/ogg', extensions: 'ogv,ogm' },

        // kSecondaryMappings:
        //
        //   Use this for mappings that must exist, but can be overridden by user
        //   preferences.    
        // See comments above for details on how this list is used.
        // Must precede image/vnd.microsoft.icon .
        { type: 'image/x-icon', extensions: 'ico' },
        { type: 'application/epub+zip', extensions: 'epub' },
        { type: 'application/font-woff', extensions: 'woff' },
        { type: 'application/gzip', extensions: 'gz,tgz' },
        { type: 'application/javascript', extensions: 'js' },
        { type: 'application/json', extensions: 'json' },  // Per http://www.ietf.org/rfc/rfc4627.txt.
        { type: 'application/octet-stream', extensions: 'bin,exe,com' },
        { type: 'application/pdf', extensions: 'pdf' },
        { type: 'application/pkcs7-mime', extensions: 'p7m,p7c,p7z' },
        { type: 'application/pkcs7-signature', extensions: 'p7s' },
        { type: 'application/postscript', extensions: 'ps,eps,ai' },
        { type: 'application/rdf+xml', extensions: 'rdf' },
        { type: 'application/rss+xml', extensions: 'rss' },
        { type: 'application/vnd.android.package-archive', extensions: 'apk' },
        { type: 'application/vnd.mozilla.xul+xml', extensions: 'xul' },
        { type: 'application/x-gzip', extensions: 'gz,tgz' },
        { type: 'application/x-mpegurl', extensions: 'm3u8' },
        { type: 'application/x-shockwave-flash', extensions: 'swf,swl' },
        { type: 'application/x-tar', extensions: 'tar' },
        { type: 'application/zip', extensions: 'zip' },
//        { type: 'audio/mpeg', extensions: 'mp3' },
        // This is the platform mapping on recent versions of Windows 10.
        { type: 'audio/webm', extensions: 'weba' },
        { type: 'image/bmp', extensions: 'bmp' },
        { type: 'image/jpeg', extensions: 'jfif,pjpeg,pjp' },
        { type: 'image/svg+xml', extensions: 'svg,svgz' },
        { type: 'image/tiff', extensions: 'tiff,tif' },
        { type: 'image/vnd.microsoft.icon', extensions: 'ico' },
        { type: 'image/x-png', extensions: 'png' },
        { type: 'image/x-xbitmap', extensions: 'xbm' },
        { type: 'message/rfc822', extensions: 'eml' },
        { type: 'text/calendar', extensions: 'ics' },
        { type: 'text/html', extensions: 'ehtml' },
        { type: 'text/plain', extensions: 'txt,text' },
        { type: 'text/x-sh', extensions: 'sh' },
        { type: 'text/xml', extensions: 'xsl,xbl,xslt' },
        { type: 'video/mpeg', extensions: 'mpeg,mpg' },

        // This is the platform mapping on recent versions of Windows 10.
        { type: 'audio/webm' },
        { type: 'image/bmp' },
        { type: 'image/jpeg' },
        { type: 'image/svg+xml' },
        { type: 'image/tiff' },
        { type: 'image/vnd.microsoft.icon' },
        { type: 'image/x-png' },
        { type: 'image/x-xbitmap' },
        { type: 'message/rfc822' },
        { type: 'text/calendar' },
        { type: 'text/html' },
        { type: 'text/plain' },
        { type: 'text/x-sh' },
        { type: 'text/xml' },
        { type: 'video/mpeg' },

        // kStandardImageTypes
        { type: 'image/bmp' },
        { type: 'image/cis-cod' },
        { type: 'image/gif' },
        { type: 'image/ief' },
        { type: 'image/jpeg' },
        { type: 'image/webp' },
        { type: 'image/pict' },
        { type: 'image/pipeg' },
        { type: 'image/png' },
        { type: 'image/svg+xml' },
        { type: 'image/tiff' },
        { type: 'image/vnd.microsoft.icon' },
        { type: 'image/x-cmu-raster' },
        { type: 'image/x-cmx' },
        { type: 'image/x-icon' },
        { type: 'image/x-portable-anymap' },
        { type: 'image/x-portable-bitmap' },
        { type: 'image/x-portable-graymap' },
        { type: 'image/x-portable-pixmap' },
        { type: 'image/x-rgb' },
        { type: 'image/x-xbitmap' },
        { type: 'image/x-xpixmap' },
        { type: 'image/x-xwindowdump' },

        // kStandardAudioTypes
        { type: 'audio/aac' },
        { type: 'audio/aiff' },
        { type: 'audio/amr' },
        { type: 'audio/basic' },
        { type: 'audio/flac' },
        { type: 'audio/midi' },
        { type: 'audio/mp3' },
        { type: 'audio/mp4' },
        { type: 'audio/mpeg' },
        { type: 'audio/mpeg3' },
        { type: 'audio/ogg' },
        { type: 'audio/vorbis' },
        { type: 'audio/wav' },
        { type: 'audio/webm' },
        { type: 'audio/x-m4a' },
        { type: 'audio/x-ms-wma' },
        { type: 'audio/vnd.rn-realaudio' },
        { type: 'audio/vnd.wave' },

        // kStandardVideoTypes
        { type: 'video/avi' },
        { type: 'video/divx' },
        { type: 'video/flc' },
        { type: 'video/mp4' },
        { type: 'video/mpeg' },
        { type: 'video/ogg' },
        { type: 'video/quicktime' },
        { type: 'video/sd-video' },
        { type: 'video/webm' },
        { type: 'video/x-dv' },
        { type: 'video/x-m4v' },
        { type: 'video/x-mpeg' },
        { type: 'video/x-ms-asf' },
        { type: 'video/x-ms-wmv' }
    ]
};

