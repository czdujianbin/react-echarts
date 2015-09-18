
var Tools = {

    loadScript : function(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        // IE
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { // others
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        document.body.appendChild(script);
    }

}

module.exports = Tools;
