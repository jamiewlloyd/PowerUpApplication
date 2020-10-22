// function logo(img) {
//     if (img.src.indexOf('bitjamie.png') == -1) return; // already changed 
//     var d = new Date();
//     var Month = d.getMonth() + 1;
//     var src = "img/";
//     if (Month === 10) {
//         src += "jamiehalloween.png";
//     } else if (Month === 11) {
//         src += "bonfire.png";
//     } else if (Month === 12) {
//         src += "xmasjamie.png";
//     } else {
//         src += "bitjamie.png";
//     }
//     img.src = src;
// }

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}