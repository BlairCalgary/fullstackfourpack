function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "25px 10px";
    // document.getElementById("navbar").style.padding = "30px 10px";
    // document.getElementById("logo").style.fontSize = "20px";
    // console.log("scroll");
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    // document.getElementById("logo").style.fontSize = "25px";
    // console.log("scroll");
  }
}

window.onscroll = function() {scrollFunction()};

var scroll = window.requestAnimationFrame ||
  function(callback) {window.setTimeout(callback,1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function isElementPartiallyInViewport(el)
{
    //special bonus for those using jQuery
    if (typeof jQuery !== 'undefined' && el instanceof jQuery) el = el[0];

    var rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementPartiallyInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}

loop();

