// https://github.com/WebKit/webkit/blob/8e95493b2c7ce6ceb07b3d61f256741714482d07/Source/WebCore/platform/MIMETypeRegistry.cpp
module.exports = {
    browser: 'WebKit',
    mimeTypes: [
        // This represents the subset of allowed image UTIs for which CoreServices has a corresponding MIME type.
        { type: 'image/tiff' },
        { type: 'image/gif' },
        { type: 'image/jpeg' },
        { type: 'image/vnd.microsoft.icon' },
        { type: 'image/jp2' },
        { type: 'image/png' },
        { type: 'image/bmp' },

        { type: 'image/x-icon' }, // Favicons don't have a MIME type in the registry either.
        { type: 'image/pjpeg' }, //  We only get one MIME type per UTI, hence our need to add these manually

        // JPEG (image/jpeg)
        { type: 'image/jpg' },
        { type: 'image/jp_' },
        { type: 'image/jpe_' },
        { type: 'application/jpg' },
        { type: 'application/x-jpg' },
        { type: 'image/pipeg' },
        { type: 'image/vnd.switfview-jpeg' },
        { type: 'image/x-xbitmap' },

        // GIF (image/gif)
        { type: 'image/gi_' },

        // PNG (image/png)
        { type: 'application/png' },
        { type: 'application/x-png' },

        // TIFF (image/tiff)
        { type: 'image/x-tif' },
        { type: 'image/tif' },
        { type: 'image/x-tiff' },
        { type: 'application/tif' },
        { type: 'application/x-tif' },
        { type: 'application/tiff' },
        { type: 'application/x-tiff' },

            // BMP (image/bmp, image/x-bitmap)
        { type: 'image/x-bmp' },
        { type: 'image/x-win-bitmap' },
        { type: 'image/x-windows-bmp' },
        { type: 'image/ms-bmp' },
        { type: 'image/x-ms-bmp' },
        { type: 'application/bmp' },
        { type: 'application/x-bmp' },
        { type: 'application/x-win-bitmap' },

        { type: 'image/jp2' },
        { type: 'image/jpeg2000' },
        { type: 'image/webp' },

        { type: 'image/ico' },

            // https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type
        { type: 'text/javascript' },
        { type: 'text/ecmascript' },
        { type: 'application/javascript' },
        { type: 'application/ecmascript' },
        { type: 'application/x-javascript' },
        { type: 'application/x-ecmascript' },
        { type: 'text/javascript1.0' },
        { type: 'text/javascript1.1' },
        { type: 'text/javascript1.2' },
        { type: 'text/javascript1.3' },
        { type: 'text/javascript1.4' },
        { type: 'text/javascript1.5' },
        { type: 'text/jscript' },
        { type: 'text/livescript' },
        { type: 'text/x-javascript' },
        { type: 'text/x-ecmascript' },

        { type: 'text/html' },
        { type: 'text/xml' },
        { type: 'text/xsl' },
        { type: 'text/plain' },
        { type: 'application/xml' },
        { type: 'application/xhtml+xml' },
        { type: 'application/vnd.wap.xhtml+xml' },
        { type: 'application/rss+xml' },
        { type: 'application/atom+xml' },
        { type: 'application/json' },
        { type: 'image/svg+xml' },
        { type: 'application/x-ftp-directory' },
        { type: 'multipart/x-mixed-replace' },

        { type: 'text/calendar' },
        { type: 'text/x-calendar' },
        { type: 'text/x-vcalendar' },
        { type: 'text/vcalendar' },
        { type: 'text/vcard' },
        { type: 'text/x-vcard' },
        { type: 'text/directory' },
        { type: 'text/ldif' },
        { type: 'text/qif' },
        { type: 'text/x-qif' },
        { type: 'text/x-csv' },
        { type: 'text/x-vcf' },
        { type: 'text/rtf' },
        { type: 'text/vnd.sun.j2me.app-descriptor' },

        // Ogg
        { type: 'application/ogg', extensions: 'ogx' },
        { type: 'audio/ogg', extensions: 'ogg' },
        { type: 'audio/ogg', extensions: 'oga' },
        { type: 'video/ogg', extensions: 'ogv' },

        // Annodex
        { type: 'application/annodex', extensions: 'anx' },
        { type: 'audio/annodex', extensions: 'axa' },
        { type: 'video/annodex', extensions: 'axv' },
        { type: 'audio/speex', extensions: 'spx' },

        // WebM
        { type: 'video/webm', extensions: 'webm' },
        { type: 'audio/webm', extensions: 'webm' },

        // MPEG
        { type: 'audio/mpeg', extensions: 'm1a' },
        { type: 'audio/mpeg', extensions: 'm2a' },
        { type: 'audio/mpeg', extensions: 'm1s' },
        { type: 'audio/mpeg', extensions: 'mpa' },
        { type: 'video/mpeg', extensions: 'mpg' },
        { type: 'video/mpeg', extensions: 'm15' },
        { type: 'video/mpeg', extensions: 'm1s' },
        { type: 'video/mpeg', extensions: 'm1v' },
        { type: 'video/mpeg', extensions: 'm75' },
        { type: 'video/mpeg', extensions: 'mpa' },
        { type: 'video/mpeg', extensions: 'mpeg' },
        { type: 'video/mpeg', extensions: 'mpm' },
        { type: 'video/mpeg', extensions: 'mpv' },

        // MPEG playlist
        { type: 'application/vnd.apple.mpegurl', extensions: 'm3u8' },
        { type: 'application/mpegurl', extensions: 'm3u8' },
        { type: 'application/x-mpegurl', extensions: 'm3u8' },
        { type: 'audio/mpegurl', extensions: 'm3url' },
        { type: 'audio/x-mpegurl', extensions: 'm3url' },
        { type: 'audio/mpegurl', extensions: 'm3u' },
        { type: 'audio/x-mpegurl', extensions: 'm3u' },

        // MPEG-4
        { type: 'video/x-m4v', extensions: 'm4v' },
        { type: 'audio/x-m4a', extensions: 'm4a' },
        { type: 'audio/x-m4b', extensions: 'm4b' },
        { type: 'audio/x-m4p', extensions: 'm4p' },
        { type: 'audio/mp4', extensions: 'm4a' },

        // MP3
        { type: 'audio/mp3', extensions: 'mp3' },
        { type: 'audio/x-mp3', extensions: 'mp3' },
        { type: 'audio/x-mpeg', extensions: 'mp3' },

        // MPEG-2
        { type: 'video/x-mpeg2', extensions: 'mp2' },
        { type: 'video/mpeg2', extensions: 'vob' },
        { type: 'video/mpeg2', extensions: 'mod' },
        { type: 'video/m2ts', extensions: 'm2ts' },
        { type: 'video/x-m2ts', extensions: 'm2t' },
        { type: 'video/x-m2ts', extensions: 'ts' },

        // 3GP/3GP2
        { type: 'audio/3gpp', extensions: '3gpp' },
        { type: 'audio/3gpp2', extensions: '3g2' },
        { type: 'application/x-mpeg', extensions: 'amc' },

        // AAC
        { type: 'audio/aac', extensions: 'aac' },
        { type: 'audio/aac', extensions: 'adts' },
        { type: 'audio/x-aac', extensions: 'm4r' },

        // CoreAudio File
        { type: 'audio/x-caf', extensions: 'caf' },
        { type: 'audio/x-gsm', extensions: 'gsm' },

        // ADPCM
        { type: 'audio/x-wav', extensions: 'wav' },
        { type: 'audio/vnd.wave', extensions: 'wav' },

        { type: 'image/x-ms-bmp', extensions: 'image/bmp' },
        { type: 'image/x-windows-bmp', extensions: 'image/bmp' },
        { type: 'image/x-bmp', extensions: 'image/bmp' },
        { type: 'image/x-bitmap', extensions: 'image/bmp' },
        { type: 'image/x-ms-bitmap', extensions: 'image/bmp' },
        { type: 'image/jpg', extensions: 'image/jpeg' },
        { type: 'image/pjpeg', extensions: 'image/jpeg' },
        { type: 'image/x-png', extensions: 'image/png' },
        { type: 'image/vnd.rim.png', extensions: 'image/png' },
        { type: 'image/ico', extensions: 'image/vnd.microsoft.icon' },
        { type: 'image/icon', extensions: 'image/vnd.microsoft.icon' },
        { type: 'text/ico', extensions: 'image/vnd.microsoft.icon' },
        { type: 'application/ico', extensions: 'image/vnd.microsoft.icon' },
        { type: 'image/x-icon', extensions: 'image/vnd.microsoft.icon' },
        { type: 'audio/vnd.qcelp', extensions: 'audio/qcelp' },
        { type: 'audio/qcp', extensions: 'audio/qcelp' },
        { type: 'audio/vnd.qcp', extensions: 'audio/qcelp' },
        { type: 'audio/wav', extensions: 'audio/x-wav' },
        { type: 'audio/vnd.wave', extensions: 'audio/x-wav' },
        { type: 'audio/mid', extensions: 'audio/midi' },
        { type: 'audio/sp-midi', extensions: 'audio/midi' },
        { type: 'audio/x-mid', extensions: 'audio/midi' },
        { type: 'audio/x-midi', extensions: 'audio/midi' },
        { type: 'audio/x-mpeg', extensions: 'audio/mpeg' },
        { type: 'audio/mp3', extensions: 'audio/mpeg' },
        { type: 'audio/x-mp3', extensions: 'audio/mpeg' },
        { type: 'audio/mpeg3', extensions: 'audio/mpeg' },
        { type: 'audio/x-mpeg3', extensions: 'audio/mpeg' },
        { type: 'audio/mpg3', extensions: 'audio/mpeg' },
        { type: 'audio/mpg', extensions: 'audio/mpeg' },
        { type: 'audio/x-mpg', extensions: 'audio/mpeg' },
        { type: 'audio/m4a', extensions: 'audio/mp4' },
        { type: 'audio/x-m4a', extensions: 'audio/mp4' },
        { type: 'audio/x-mp4', extensions: 'audio/mp4' },
        { type: 'audio/x-aac', extensions: 'audio/aac' },
        { type: 'audio/x-amr', extensions: 'audio/amr' },
        { type: 'audio/mpegurl', extensions: 'audio/x-mpegurl' },
        { type: 'audio/flac', extensions: 'audio/x-flac' },
        { type: 'video/3gp', extensions: 'video/3gpp' },
        { type: 'video/avi', extensions: 'video/x-msvideo' },
        { type: 'video/x-m4v', extensions: 'video/mp4' },
        { type: 'video/x-quicktime', extensions: 'video/quicktime' },
        { type: 'application/java', extensions: 'application/java-archive' },
        { type: 'application/x-java-archive', extensions: 'application/java-archive' },
        { type: 'application/x-zip-compressed', extensions: 'application/zip' },
        { type: 'text/cache-manifest', extensions: 'text/plain' }
    ]
};
