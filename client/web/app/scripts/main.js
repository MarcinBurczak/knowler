Number.prototype.toHHMMSS = function() {
    var appendZero = function(d) {
        if (d < 10) {
            return "0" + d;
        }
        return d;
    };

    var sec_num = this;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num % 3600) / 60);
    var seconds = sec_num % 60;

    return [hours, minutes, seconds].map(appendZero).join(":");
};

Array.prototype.contains = function(val) {
    return this.indexOf(val) !== -1;
};

function UrlUtils() {}
UrlUtils.getParam = function(url, param) {
    if (url === undefined) {
        return;
    }
    var vars = url.split(/[?,&]+/);
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === param) {
            return pair[1];
        }
    }
    return undefined;
};
UrlUtils.isValidUrl = function(value) {
    var regex = new RegExp("(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})");
    return regex.test(value);
};

function ArrayUtils() {}
ArrayUtils.getOrElse = function(array, index, other) {
    return (index < array.length && index >= 0) ? array[index] : other;
};
ArrayUtils.isEmpty = function(array) {
    return array === undefined || array === null || array.length === 0;
};
ArrayUtils.isNotEmpty = function(array) {
    return !ArrayUtils.isEmpty(array);
};

function GoogleYouTubeUtils() {}
GoogleYouTubeUtils.determinePreferredHeight = function() {
    if(window.innerWidth > 1279) {
    	return 480;
    } else if (window.innerWidth > 799) {
    	return 300;
    }
    return 200;
};
GoogleYouTubeUtils.getVideoDuration = function(response) {
    return Math.round(response.detail.target.F.duration);
};

function StringUtils() {}
StringUtils.isEmpty = function(str) {
    return str === undefined || str === "";
};
StringUtils.isNotEmpty = function(str) {
    return !StringUtils.isEmpty(str);
};

function DateUtils() {}
DateUtils.timestampToHumanDate = function (timestamp) {
    if (timestamp === undefined) {
        console.error("Failed to convert timestamp to human date. Timestamp was undefined.");
        return undefined;
    }
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var date = new Date(timestamp);
    return "" + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
};

Config = {
    google: {
        developerKey: "AIzaSyClNyjcMSqAOtECy0NU5jIXJe1_jNoWNP8"
    },
    disqus: {
        shortname: "knowler",
        https: true
    },
    urls: {
        frontend: "http://localhost:3000",
        backend: "http://localhost:9000"
    },
    categories: ["all", "programming", "maths", "biology", "physics", "technics", "chemistry", "socjology", "marketing"]
};