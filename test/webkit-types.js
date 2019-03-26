module.exports = {
    browser: 'WebKit',
    mimeTypes: [
        // based on https://github.com/WebKit/webkit/blob/8e95493b2c7ce6ceb07b3d61f256741714482d07/Source/WebCore/platform/MIMETypeRegistry.cpp

        // Ogg
        { type: 'application/ogg', extensions: 'ogx' },
        { type: 'audio/ogg', extensions: 'ogg,oga' },
        { type: 'video/ogg', extensions: 'ogv' },

        // WebM
        { type: 'video/webm', extensions: 'webm' },

        // MPEG
        { type: 'audio/mpeg', extensions: 'm1a,m2a,m1s,mpa' },
        { type: 'video/mpeg', extensions: 'mpg,m15,m1s,m1v,m75,mpa,mpeg,mpm,mpv' },

        // MPEG-4
        { type: 'video/x-m4v', extensions: 'm4v' },
        { type: 'audio/x-m4a', extensions: 'm4a' },
        { type: 'audio/x-m4b', extensions: 'm4b' },
        { type: 'audio/x-m4p', extensions: 'm4p' },
        { type: 'audio/mp4', extensions: 'm4a' },

        // MP3
        { type: 'audio/mp3', extensions: 'mp3' },

        // MPEG-2
        { type: 'video/mpeg2', extensions: 'mod,vob,mp2' },
        { type: 'video/m2ts', extensions: 'm2ts' },
        { type: 'video/x-m2ts', extensions: 'm2t,ts' },

        // 3GP/3GP2
        { type: 'audio/3gpp', extensions: '3gpp' },
        { type: 'audio/3gpp2', extensions: '3g2' },
        { type: 'application/x-mpeg', extensions: 'amc' },

        // AAC
        { type: 'audio/aac', extensions: 'aac,adts' },
        { type: 'audio/x-aac', extensions: 'm4r' },

        // CoreAudio File
        { type: 'audio/x-caf', extensions: 'caf' },
        { type: 'audio/x-gsm', extensions: 'gsm' },

        // ADPCM
        { type: 'audio/x-wav', extensions: 'wav' },
        { type: 'audio/vnd.wave', extensions: 'wav' }
    ]
};
