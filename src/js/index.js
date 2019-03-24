var scrollPos = 0;
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		document.getElementsByTagName("nav")[0].style.opacity = "1";
	else
		document.getElementsByTagName("nav")[0].style.opacity = "0";
	scrollPos = (document.body.getBoundingClientRect()).top;
});

window.onscroll = function() {onScroll()};

function onScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(52, 152, 219, 0.7)";

  } else {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "transparent";
  }
}