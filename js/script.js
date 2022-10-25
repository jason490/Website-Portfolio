
(function (global){

    var navbarURL = "snippets/navbarSnippet.html";
    var insertHtml = function (selector, html){
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html
    };
    var showLoading = function(selector){
        var html = "<div class ='text-center'";
        html += "Loading...</div>";
        insertHtml(selector,html)
    };
    var insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string
          .replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    };
    document.addEventListener("DOMContentLoaded", function (event){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            navbarURL,
            buildAndShowHomeHTML,
            true);
    });

})(window);

