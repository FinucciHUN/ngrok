//gridBG.style.position = 'static'

bgLight.style.borderRadius = '50vw/200vw'; //háttérfény alakzat mobilon
//bgLight.style.borderRadius = '50vw/200vw'; //háttérfény alakzat mobilon

//Plus ikon kattintásra fő cím és leírás hover effect ki és bekapcs
plusIcon.setAttribute('onclick', 'mainTextsHover(0)');

function mainTextsHover(switchTo) {
  setTimeout(function () {
    if (switchTo === 0) {
      mainHeader.setAttribute('data-w-id', '');
      mainDescription.setAttribute('data-w-id', '');
      plusIcon.setAttribute('onclick', 'mainTextsHover(1)');
    }
  }, 100);
  if (switchTo === 1) {
    mainHeader.setAttribute('data-w-id', mainHeaderWFID);
    mainDescription.setAttribute('data-w-id', mainDescriptionWFID);
    plusIcon.setAttribute('onclick', 'mainTextsHover(0)');
  }
}

//Üveg újjal lapozás figyelő
var glassObserver = new MutationObserver(function (mutations) {
  if (whichURL === diffuserURL) {
    var qty = glassQty;
  } else {
    var qty = fragranceQty;
  }
  for (j = 0; j < qty; j++) {
    mutations.forEach(function (mutation) {
      var hidden = glassSliders[j].getAttribute('aria-hidden');
      //                  console.log('üveg hidden = '+hidden)
      if (mutation.type == 'attributes' && hidden == null) {
        //                    console.log('üveg mutation if-en belül')
        var colorNumber = parseInt(
          glassSliders[j].getAttribute('aria-label').charAt(0)
        );
        //                    console.log('üveg colorNumber = '+colorNumber+', j = '+j)
        if (whichURL === diffuserURL) {
          glassChanger(colorNumber, true);
          //                      console.log('MutationObserver-en belül, if, colorNumber = '+colorNumber)
        } else if (whichURL === fragrancesURL) {
          glassChanger(colorNumber, true);
          //                        console.log('MutationObserver-en belül, else if,  colorNumber = '+colorNumber)
        }
      }
    });
  }
});

glassObserver.observe(glassSliders[0], {
  attributes: true,
  attributeFilter: ['aria-hidden'],
});

//Pálca újjal lapozás figyelő
if (whichURL === diffuserURL) {
  var stickObserver = new MutationObserver(function (mutations) {
    for (k = 0; k < stickQty; k++) {
      mutations.forEach(function (mutation) {
        var hidden = stickSliders[k].getAttribute('aria-hidden');
        //                console.log('pálca hidden = '+hidden)
        if (mutation.type == 'attributes' && hidden == null) {
          //                  console.log('pálca mutation if-en belül')
          var colorNumber = parseInt(
            stickSliders[k].getAttribute('aria-label').charAt(0)
          );
          //                  console.log('pálca colorNumber = '+colorNumber+', k = '+k)
          stickChanger(colorNumber, true);
        }
      });
    }
  });

  stickObserver.observe(stickSliders[0], {
    attributes: true,
    attributeFilter: ['aria-hidden'],
  });
}

//Saját kosárba és vissza gomb bekötése
ownAddToCartBTN.setAttribute('onclick', 'addToCart()');
backBTN.setAttribute('onclick', 'backBTNclick()');

function addToCart() {
  document.getElementsByClassName('shopify-buy__btn')[0].remove();
  if (whichURL === diffuserURL) {
    shopifyCall(
      diffuserVariantID[glassID]['stick'][stickID]['fragrance'][fragranceID].id,
      pageID
    );
  } else if (whichURL === fragrancesURL) {
    shopifyCall(fragrancesVariantID[fragranceID]['stick'][stickID].id, pageID);
  }
  setTimeout(function () {
    document.getElementById('plus-icon').click();
  }, 500);
  setTimeout(function () {
    document
      .getElementsByClassName(
        'shopify-buy-cart-wrapper shopify-buy-frame shopify-buy-frame--cart'
      )[0]
      .setAttribute(
        'style',
        //                 'display: fixed; position: fixed; left: 150vw;'
        ''
      );
    document.getElementsByClassName('shopify-buy__btn')[0].click();
    //      document.getElementsByClassName('shopify-buy__btn')[0].remove()
  }, 1000);
}

//Testreszabás visszacsúsztatása mobilon
function backBTNclick() {
  plusIcon.click();
}

//Háttér szín és fény csere
function bgChange(colorNumber) {
  setTimeout(function () {
    if (whichURL === diffuserURL) {
      gridBG.style.backgroundColor = bgColors.find(
        (el) => el.number === colorNumber
      ).d_bg_color; //piros háttér
      bgLightCode = bgColors.find((el) => el.number === colorNumber).d_bg_light;
    } else if (whichURL === fragrancesURL) {
      gridBG.style.backgroundColor = bgColors.find(
        (el) => el.number === colorNumber
      ).f_bg_color;
      bgLightCode = bgColors.find((el) => el.number === colorNumber).f_bg_light;
    }
    var bgLightParams =
      'radial-gradient(circle farthest-side at 50% 50%, ' +
      bgLightCode +
      ', ' +
      bgLightCode +
      ' 20%, rgba(204, 59, 61, 0))';
    bgLight.style.backgroundImage = bgLightParams;
  }, 300);
}

bgChange(1);

//Üveg oldal esetén ----------------------------------------------------------------------------------------
if (whichURL === diffuserURL) {
  //Betöltési beállítások
  //  gridBG.style.backgroundColor = bgColors.find((el) => el.number === 1).d_bg_color; //piros háttér
  glassID = 0; //shopify gomb piros üveg választása
  stickID = 0; //shopify gomb fehér pálca választása
  fragranceID = 0; //shopify gomb vanillia illat választása

  for (i = 0; i < glassQty; i++) {
    glassOptionBTNs[i].setAttribute(
      'onclick',
      'glassChanger(' + (i + 1) + ', false, this)'
    );
  }

  for (i = 0; i < stickQty; i++) {
    stickOptionBTNs[i].setAttribute(
      'onclick',
      'stickChanger(' + (i + 1) + ', false, this)'
    );
  }

  for (i = 0; i < giftFragranceQty; i++) {
    fragranceOptionBTNs[i].setAttribute(
      'onclick',
      'fragranceChanger(' + (i + glassQty + stickQty + 1) + ', false, this)'
    );
  }

  //Funkciók - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //Háttérszín és fény váltás
  function glassChanger(colorNumber, isGesture, el) {
    if (0 < colorNumber && colorNumber < glassQty + 1) {
      //      gridBG.style.backgroundColor = bgColors.find((el) => el.number === colorNumber).d_bg_color;
      bgChange(colorNumber);
      glassID = colorNumber - 1;

      for (i = 0; i < glassQty; i++) {
        var j = glassOptionBTNs[i].getAttribute('class').replace('current', '');
        glassOptionBTNs[i].setAttribute('class', j);
        glassOptionBTNtext[i].setAttribute('class', 'small-text');
      }
      setTimeout(function () {
        glassOptionBTNtext[colorNumber - 1].setAttribute(
          'class',
          'small-text current'
        );
      }, 50);
      if (isGesture !== true) {
        glassSlidersNav.children[colorNumber - 1].click();
        var btnClass = el.getAttribute('class');
        el.setAttribute('class', btnClass + ' current');
      } else {
        var btnClass = glassOptionBTNs[colorNumber - 1].getAttribute('class');
        glassOptionBTNs[colorNumber - 1].setAttribute(
          'class',
          btnClass + ' current'
        );
      }
    } else if (colorNumber === glassQty + 1) {
      bgChange(1);
      glassID = 0;
    } else {
      gridBG.style.backgroundColor = bgColors.find(
        (el) => el.number === glassQty
      ).d_bg_color;
      bgChange(glassQty);
      glassID = glassQty - 1;
    }
  }

  function stickChanger(colorNumber, isGesture, el) {
    if (0 < colorNumber && colorNumber < stickQty + 1) {
      stickID = colorNumber - 1;

      for (i = 0; i < stickQty; i++) {
        var j = stickOptionBTNs[i].getAttribute('class').replace('current', '');
        stickOptionBTNs[i].setAttribute('class', j);
        stickOptionBTNtext[i].setAttribute('class', 'small-text');
      }
      setTimeout(function () {
        stickOptionBTNtext[colorNumber - 1].setAttribute(
          'class',
          'small-text current'
        );
      }, 50);
      if (isGesture !== true) {
        stickSlidersNav.children[colorNumber - 1].click();
        var btnClass = el.getAttribute('class');
        el.setAttribute('class', btnClass + ' current');
      } else {
        var btnClass = stickOptionBTNs[colorNumber - 1].getAttribute('class');
        stickOptionBTNs[colorNumber - 1].setAttribute(
          'class',
          btnClass + ' current'
        );
      }
    } else if (colorNumber === stickQty + 1) {
      stickID = 0;
      console.log('else if a stickChanger-en belül');
    } else {
      stickID = stickQty - 1;
      console.log('else a stickChanger-en belül');
    }
  }

  function fragranceChanger(colorNumber) {
    if (
      glassQty + stickQty < colorNumber &&
      colorNumber < glassQty + stickQty + giftFragranceQty + 1
    ) {
      for (i = 0; i < giftFragranceQty; i++) {
        fragranceOptionBTNs[i].setAttribute('class', 'fragrance-img-container');
        fragranceOptionBTNtext[i].setAttribute('class', 'small-text');
      }
      var whichBtn = colorNumber - (glassQty + stickQty + 1);
      fragranceOptionBTNs[whichBtn].setAttribute(
        'class',
        'fragrance-img-container current'
      );
      fragranceOptionBTNtext[whichBtn].setAttribute(
        'class',
        'small-text current'
      );
      fragranceID = colorNumber - (glassQty + stickQty + 1);
    }
  }
} else if (whichURL === fragrancesURL) {
  //Illat oldal esetén ------------------------
  //Betöltési beállítások
  //  gridBG.style.backgroundColor = bgColors.find((el) => el.number === 1).d_bg_color; //piros háttér
  //glassID = 0; shopify gomb piros üveg választása
  fragranceID = 0; //shopify gomb vanillia illat választása
  stickID = 0; //shopify gomb fehér pálca választása

  for (i = 0; i < fragranceQty; i++) {
    glassOptionBTNs[i].setAttribute(
      'onclick',
      'glassChanger(' + (i + 1) + ', false, this)'
    );
  }

  for (i = 0; i < stickQty; i++) {
    stickOptionBTNs[i].setAttribute(
      'onclick',
      'stickChanger(' + (i + 1) + ', false, this)'
    );
  }

  //Funkciók - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //Háttérszín és fény váltás
  function glassChanger(colorNumber, isGesture, el) {
    if (0 < colorNumber && colorNumber < fragranceQty + 1) {
      //      gridBG.style.backgroundColor = bgColors.find((el) => el.number === colorNumber).d_bg_color;
      bgChange(colorNumber);
      fragranceID = colorNumber - 1;

      for (i = 0; i < fragranceQty; i++) {
        var j = glassOptionBTNs[i].getAttribute('class').replace('current', '');
        glassOptionBTNs[i].setAttribute('class', j);
        glassOptionBTNtext[i].setAttribute('class', 'small-text');
      }
      setTimeout(function () {
        glassOptionBTNtext[colorNumber - 1].setAttribute(
          'class',
          'small-text current'
        );
      }, 50);
      if (isGesture !== true) {
        glassSlidersNav.children[colorNumber - 1].click();
        var btnClass = el.getAttribute('class');
        el.setAttribute('class', btnClass + ' current');
      } else {
        var btnClass = glassOptionBTNs[colorNumber - 1].getAttribute('class');
        glassOptionBTNs[colorNumber - 1].setAttribute(
          'class',
          btnClass + ' current'
        );
      }
    } else if (colorNumber === fragranceQty + 1) {
      bgChange(1);
      fragranceID = 0;
    } else {
      gridBG.style.backgroundColor = bgColors.find(
        (el) => el.number === fragranceQty
      ).f_bg_color;
      bgChange(fragranceQty);
      fragranceID = fragranceQty - 1;
    }
  }

  function stickChanger(colorNumber, isGesture, el) {
    if (0 < colorNumber && colorNumber < stickQty + 1) {
      stickID = colorNumber - 1;

      for (i = 0; i < stickQty; i++) {
        var j = stickOptionBTNs[i].getAttribute('class').replace('current', '');
        stickOptionBTNs[i].setAttribute('class', j);
        stickOptionBTNtext[i].setAttribute('class', 'small-text');
      }
      setTimeout(function () {
        stickOptionBTNtext[colorNumber - 1].setAttribute(
          'class',
          'small-text current'
        );
      }, 50);
      if (isGesture !== true) {
        stickSlidersNav.children[colorNumber - 1].click();
        var btnClass = el.getAttribute('class');
        el.setAttribute('class', btnClass + ' current');
      } else {
        var btnClass = stickOptionBTNs[colorNumber - 1].getAttribute('class');
        stickOptionBTNs[colorNumber - 1].setAttribute(
          'class',
          btnClass + ' current'
        );
      }
    } else if (colorNumber === stickQty + 1) {
      stickID = 0;
      console.log('else if a stickChanger-en belül');
    } else {
      stickID = stickQty - 1;
      console.log('else a stickChanger-en belül');
    }
  }

  /*function fragranceChanger(colorNumber) {
    if (
      glassQty + stickQty < colorNumber &&
      colorNumber < glassQty + stickQty + giftFragranceQty + 1
    ) {
      for (i = 0; i < giftFragranceQty; i++) {
        fragranceOptionBTNs[i].setAttribute('class', 'fragrance-img-container');
        fragranceOptionBTNtext[i].setAttribute('class', 'small-text');
      }
      var whichBtn = colorNumber - (glassQty + stickQty + 1);
      fragranceOptionBTNs[whichBtn].setAttribute(
        'class',
        'fragrance-img-container current'
      );
      fragranceOptionBTNtext[whichBtn].setAttribute(
        'class',
        'small-text current'
      );
      fragranceID = colorNumber - (glassQty + stickQty + 1);
    }
  }
  */
}
