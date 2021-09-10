var bgColors = [
  {
    number: 1,
    d_name: 'piros',
    d_bg_color: '#811a1b',
    d_bg_light: '#cc3c3d',
    f_name: 'vanilla',
    f_bg_color: '#CFA42C',
    f_bg_light: '#ECD352',
  },
  {
    number: 2,
    d_name: 'kék',
    d_bg_color: '#204973',
    d_bg_light: '#4787C9',
    f_name: 'lótusz',
    f_bg_color: '#EB5F3C',
    f_bg_light: '#FFAF7A',
  },
  {
    number: 3,
    d_name: 'zöld',
    d_bg_color: '#276525',
    d_bg_light: '#59AE4F',
    f_name: 'rózsa',
    f_bg_color: '#920607',
    f_bg_light: '#D94E4F',
  },
  {
    number: 4,
    d_name: 'fehér',
    d_bg_color: '#999999',
    d_bg_light: '#dddddd',
    f_name: 'levendula',
    f_bg_color: '#71559A',
    f_bg_light: '#BEA0D5',
  },
  {
    number: 5,
    d_name: 'fekete',
    d_bg_color: '#393939',
    d_bg_light: '#777777',
    f_name: 'óceán',
    f_bg_color: '#1A4E91',
    f_bg_light: '#5C97BF',
  },
  {
    number: 6,
    d_name: '',
    d_bg_color: '',
    d_bg_light: '',
    f_name: 'menta',
    f_bg_color: '#1FAF76',
    f_bg_light: '#62F6B6',
  },
];

//Shopify termék ID-k
var diffuserVariantID = [
  {
    number: 1,
    d_name: 'piros',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270967402666',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270967435434',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270967468202',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270967500970',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270967533738',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270967566506',
          },
        ],
      },
      {
        number: 2,
        s_name: 'fekete',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270967206058',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270967238826',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270967271594',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270967304362',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270967337130',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270967369898',
          },
        ],
      },
      {
        number: 3,
        s_name: 'fa',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270967599274',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270967632042',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270967664810',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270967697578',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270967730346',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270967763114',
          },
        ],
      },
    ],
  },
  {
    number: 2,
    d_name: 'kék',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270967992490',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270968025258',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270968058026',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270968090794',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270968123562',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270968156330',
          },
        ],
      },
      {
        number: 2,
        s_name: 'fekete',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270967795882',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270967828650',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270967861418',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270967894186',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270967926954',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270967959722',
          },
        ],
      },
      {
        number: 3,
        s_name: 'fa',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270968189098',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270968221866',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270968254634',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270968287402',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270968320170',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270968352938',
          },
        ],
      },
    ],
  },
  {
    number: 3,
    d_name: 'zöld',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270968582314',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270968615082',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270968647850',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270968680618',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270968713386',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270968746154',
          },
        ],
      },
      {
        number: 2,
        s_name: 'fekete',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270968385706',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270968418474',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270968451242',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270968484010',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270968516778',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270968549546',
          },
        ],
      },
      {
        number: 3,
        s_name: 'fa',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270968778922',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270968811690',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270968844458',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270968877226',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270968909994',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270968942762',
          },
        ],
      },
    ],
  },
  {
    number: 4,
    d_name: 'fehér',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270969172138',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270969204906',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270969237674',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270969270442',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270969303210',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270969335978',
          },
        ],
      },
      {
        number: 2,
        s_name: 'fekete',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270968975530',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270969008298',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270969041066',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270969073834',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270969106602',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270969139370',
          },
        ],
      },
      {
        number: 3,
        s_name: 'fa',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270969368746',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270969401514',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270969434282',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270969467050',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270969499818',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270969532586',
          },
        ],
      },
    ],
  },
  {
    number: 5,
    d_name: 'fekete',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270969761962',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270969794730',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270969827498',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270969860266',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270969893034',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270969925802',
          },
        ],
      },
      {
        number: 2,
        s_name: 'fekete',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270969565354',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270969598122',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270969630890',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270969663658',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270969696426',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270969729194',
          },
        ],
      },
      {
        number: 3,
        s_name: 'fa',
        fragrance: [
          {
            number: 0,
            f_name: 'vanillia',
            id: '41270969958570',
          },
          {
            number: 1,
            f_name: 'lótusz',
            id: '41270969991338',
          },
          {
            number: 2,
            f_name: 'rózsa',
            id: '41270970024106',
          },
          {
            number: 3,
            f_name: 'levendula',
            id: '41270970056874',
          },
          {
            number: 4,
            f_name: 'óceán',
            id: '41270970089642',
          },
          {
            number: 5,
            f_name: 'menta',
            id: '41270970122410',
          },
        ],
      },
    ],
  },
];

var fragrancesVariantID = [
  {
    number: 1,
    f_name: 'vanillia',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        id: '41276045131946',
      },
      {
        number: 2,
        s_name: 'fekete',
        id: '41276045099178',
      },
      {
        number: 3,
        s_name: 'fa',
        id: '41276045164714',
      },
    ],
  },
  {
    number: 2,
    f_name: 'lótusz',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        id: '41276045230250',
      },
      {
        number: 2,
        s_name: 'fekete',
        id: '41276045197482',
      },
      {
        number: 3,
        s_name: 'fa',
        id: '41276045263018',
      },
    ],
  },
  {
    number: 3,
    f_name: 'rózsa',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        id: '41276045328554',
      },
      {
        number: 2,
        s_name: 'fekete',
        id: '41276045295786',
      },
      {
        number: 3,
        s_name: 'fa',
        id: '41276045361322',
      },
    ],
  },
  {
    number: 4,
    f_name: 'levendula',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        id: '41276045426858',
      },
      {
        number: 2,
        s_name: 'fekete',
        id: '41276045394090',
      },
      {
        number: 3,
        s_name: 'fa',
        id: '41276045459626',
      },
    ],
  },
  {
    number: 5,
    f_name: 'óceán',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        id: '41276045525162',
      },
      {
        number: 2,
        s_name: 'fekete',
        id: '41276045492394',
      },
      {
        number: 3,
        s_name: 'fa',
        id: '41276045557930',
      },
    ],
  },
  {
    number: 6,
    f_name: 'menta',
    stick: [
      {
        number: 1,
        s_name: 'fehér',
        id: '41276045623466',
      },
      {
        number: 2,
        s_name: 'fekete',
        id: '41276045590698',
      },
      {
        number: 3,
        s_name: 'fa',
        id: '41276045656234',
      },
    ],
  },
];

// Változók
var i,
  j,
  k,
  bgLightCode,
  shopifyDIV = '',
  pageID = '',
  glassQty = 5,
  stickQty = 3,
  giftFragranceQty = 6,
  fragranceQty = 6,
  glassID = 0,
  stickID = 0,
  fragranceID = 0,
  cartItemsQty = 0,
  whichURL = location.href,
  homeURL = 'https://diamor-diffuser.webflow.io/',
  diffuserURL = 'https://diamor-diffuser.webflow.io/product/diffusers',
  fragrancesURL = 'https://diamor-diffuser.webflow.io/product/fragrances',
  hamburgerMenu = document.getElementById('nav-bar'),
  hamburgerMenuBTN = document.getElementById('navbar-btn');
if (whichURL === diffuserURL || whichURL === fragrancesURL) {
  var mainHeader = document.getElementById('main-header'),
    mainHeaderWFID = mainHeader.getAttribute('data-w-id'),
    mainDescription = document.getElementById('main-description'),
    mainDescriptionWFID = mainDescription.getAttribute('data-w-id'),
    plusIcon = document.getElementById('plus-icon'),
    bgLight = document.getElementById('bg-light'),
    ownAddToCartBTN = document.getElementById('add-to-cart-btn'),
    backBTN = document.getElementById('back-btn'),
    gridBG = document.getElementById('grid'),
    glassSliders = document.getElementById('glass-slide-mask').children,
    glassSlidersNav = document.getElementById('glass-slide-nav'),
    glassOptionBTNs = document.getElementById('glass-btn').children,
    glassOptionBTNtext = document.getElementById('glass-small-texts').children,
    stickSliders = document.getElementById('stick-slide-mask').children,
    stickSlidersNav = document.getElementById('stick-slide-nav'),
    stickOptionBTNs = document.getElementById('stick-btn').children,
    stickOptionBTNtext = document.getElementById('stick-small-texts').children;
  if (whichURL === diffuserURL) {
    var fragranceOptionBTNs = document.getElementById('fragrance-btn').children,
      fragranceOptionBTNtext = document.getElementById(
        'fragrance-small-texts'
      ).children;
  }
}

// iOS detektálás:
const isIOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);

//Oldal szélesség és magasság
window.vh, window.vw, window.currentAspectRatio;
window.mobilAspectRatio;

function viewPortParams() {
  vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  currentAspectRatio = vw / vh;
  //console.log('szélesség = ' + vw + ', magasság = ' + vh + ', oldalarány = ' + currentAspectRatio);
}

mobilAspectRatio = window.matchMedia('(max-aspect-ratio: 13/20)');

//Hamburger menü nyitáshoz háttér blur
function setHamburgerMenuBlur() {
  //console.log('setHamburgerMenuBlur');
  if (currentAspectRatio < 0.65) {
    hamburgerMenuBTN.setAttribute('onclick', 'bgBlurOn()');
  }
}

function handleAspectRatioChange(evt) {
  if (evt.matches) {
    //console.log('mobil álló képernyőarány');
  } else {
    //console.log('nem mobil álló képernyőarány');
  }
  viewPortParams();
  setHamburgerMenuBlur();
}

handleAspectRatioChange(mobilAspectRatio);

mobilAspectRatio.addEventListener('change', (e) => {
  if (e.matches) {
    //   console.log('mobil álló képernyőarány');
  } else {
    //   console.log('nem mobil álló képernyőarány');
  }
  viewPortParams();
  setHamburgerMenuBlur();
});

function bgBlurOn() {
  hamburgerMenuBTN.setAttribute('onclick', 'bgBlurOff()');
  setTimeout(function () {
    hamburgerMenu.setAttribute(
      'style',
      'backdrop-filter: blur(20px) brightness(60%);'
    );
  }, 50);
}
function bgBlurOff() {
  hamburgerMenuBTN.setAttribute('onclick', 'bgBlurOn()');
  setTimeout(function () {
    hamburgerMenu.setAttribute(
      'style',
      'backdrop-filter: blur(0px) brightness(100%);'
    );
  }, 500);
}
