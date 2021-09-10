var hamburgerMenu = document.getElementsByClassName('w-nav-button')[0];
hamburgerMenu.setAttribute('onclick', 'bgBlurOn()');

function bgBlurOn() {
  hamburgerMenu.setAttribute('onclick', 'bgBlurOff()');
  document
    .getElementsByClassName('w-nav-overlay')[0]
    .setAttribute(
      'style',
      'height: 973px; display: block; width: 412.5px; backdrop-filter: blur(20px) brightness(60%);'
    );
}

function bgBlurOff() {
  hamburgerMenu.setAttribute('onclick', 'bgBlurOn()');
  setTimeout(function () {
    document
      .getElementsByClassName('w-nav-overlay')[0]
      .setAttribute('style', 'height: 973px; display: block; width: 412.5px;');
  }, 500);
}
