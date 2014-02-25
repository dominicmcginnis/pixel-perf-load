var PixelUtil = {
    loadPixel: function(url, timeoutCallback) {
        var xmlHTTP = new XMLHttpRequest();
        xmlHTTP.open('GET', url, true);
        xmlHTTP.responseType = 'arraybuffer';
        xmlHTTP.timeout = 1000;
        xmlHTTP.ontimeout = timeoutCallback;
        xmlHTTP.onload = function (e) {
            var arr = new Uint8Array(this.response);
            var raw = String.fromCharCode.apply(null, arr);
            var b64 = btoa(raw);
            var dataURL = "data:image/jpeg;base64," + b64;
            serverImage1x4.src = dataURL;
        };
        xmlHTTP.send();
    },
    pixelTimeoutLogger: function(loggerUrl, urlToLog) {
        var logback = new XMLHttpRequest();
        logback.timeout = 1000;
        logback.open('GET', loggerUrl + '?timedoutPixel="'+encodeURIComponent(urlToLog)+'"', true);
        logback.send(); 
    }
}

