window.onload = function() {
    const iframe = document.querySelector('iframe');
    const iframeWindow = iframe.contentWindow.window;
    
    /**
     * Check to see if the iframe has navigation timing info
     * or not.  If it does, the browser downloaded and tried to
     * use the content (e.g., render).  If not, it gave up on the
     * resource and gave a Download... dialog instead.
     */
    function inspectTimingInfo() {
        const perfEntries = iframeWindow.performance.getEntriesByType('navigation');
        console.log(JSON.stringify({
            mimeType: iframe.dataset.mimeType,
            supported: !!(perfEntries && perfEntries.length > 0)
        }));
    }
    
    setTimeout(inspectTimingInfo, 100);
};
