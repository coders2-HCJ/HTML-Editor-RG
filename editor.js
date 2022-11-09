window.setInterval(function() {w3CodeColor();}, 0);
const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const elem = document.documentElement;

var fsc = function() {
    if(elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if(elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if(elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
};

var html = first.textContent;
iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);

first.addEventListener("keyup", function() {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

first.addEventListener("paste", function(event) {
    event.preventDefault();
    var text = event.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});
