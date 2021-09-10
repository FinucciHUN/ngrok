setTimeout(function () {
  document.getElementsByTagName('body')[0].setAttribute('class', 'body');
}, 1800);

//Scroll nyil z-index változtatás oldaltól függően
window.addEventListener('scroll', function () {
  var scrolledY = window.pageYOffset;
  if (scrolledY > 5 && scrolledY < 100) {
    document.getElementById('scroll-arrow-to-page-3').style.zIndex = '2';
  } else if (scrolledY <= 5) {
    document.getElementById('scroll-arrow-to-page-3').style.zIndex = '0';
  }
  //console.log('scrolledY = ' + scrolledY);
});
