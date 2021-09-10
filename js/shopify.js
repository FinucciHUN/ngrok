if (whichURL === diffuserURL) {
  shopifyDIV = '<div id="product-component-1630932077655"></div>';
  pageID = '6945639760042';
} else {
  shopifyDIV = '<div id="product-component-1630978451553"></div>';
  pageID = '6946864955562';
}

document.getElementById('shopify-own-container').innerHTML = shopifyDIV;

function shopifyCall(actualVariantID, pageID) {
  //  console.log('call funkción belül')
  var scriptURL =
    'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'diamor-lite.myshopify.com',
      storefrontAccessToken: '55343b34fb79a8cbf48352c03bc9f32b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: pageID,
        variantId: actualVariantID,
        node: document.getElementById('product-component-' + pageID + ''),
        moneyFormat: '%7B%7Bamount_no_decimals_with_comma_separator%7D%7D',
        options: {
          product: {
            iframe: false,
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': 'calc(25% - 20px)',
                  'margin-left': '20px',
                  'margin-bottom': '50px',
                },
              },
              button: {
                'font-size': '18px',
                'padding-top': '17px',
                'padding-bottom': '17px',
                color: '#d2ad45',
                ':hover': {
                  color: '#d2ad45',
                  'background-color': '#333333',
                },
                'background-color': '#393939',
                ':focus': {
                  'background-color': '#333333',
                },
                'border-radius': '5px',
              },
              quantityInput: {
                'font-size': '18px',
                'padding-top': '17px',
                'padding-bottom': '17px',
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
              options: false,
            },
            text: {
              button: 'Kosárba',
            },
          },
          productSet: {
            styles: {
              products: {
                '@media (min-width: 601px)': {
                  'margin-left': '-20px',
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0px',
                  'margin-bottom': '0px',
                },
              },
            },
            button: {
              'font-size': '18px',
              'padding-top': '17px',
              'padding-bottom': '17px',
              color: '#d2ad45',
              ':hover': {
                color: '#d2ad45',
                'background-color': '#333333',
              },
              'background-color': '#393939',
              ':focus': {
                'background-color': '#333333',
              },
              'border-radius': '5px',
            },
            quantityInput: {
              'font-size': '18px',
              'padding-top': '17px',
              'padding-bottom': '17px',
            },
            text: {
              button: 'Kosárba',
            },
          },
          option: {},
          cart: {
            //            "iframe": false,
            styles: {
              button: {
                'font-size': '18px',
                'padding-top': '17px',
                'padding-bottom': '17px',
                color: '#d2ad45',
                ':hover': {
                  color: '#d2ad45',
                  'background-color': '#333333',
                },
                'background-color': 'rgb(191, 191, 191, 0.5)',
                ':focus': {
                  'background-color': '#333333',
                },
                'border-radius': '5px',
              },
              title: {
                color: '#ffffff',
              },
              header: {
                color: '#ffffff',
              },
              lineItems: {
                color: '#ffffff',
              },
              subtotalText: {
                color: '#ffffff',
              },
              subtotal: {
                color: '#ffffff',
              },
              notice: {
                color: '#ffffff',
              },
              currency: {
                color: '#ffffff',
              },
              close: {
                color: '#ffffff',
                ':hover': {
                  color: '#ffffff',
                },
              },
              empty: {
                color: '#ffffff',
              },
              noteDescription: {
                color: '#ffffff',
              },
              discountText: {
                color: '#ffffff',
              },
              discountIcon: {
                fill: '#ffffff',
              },
              discountAmount: {
                color: '#ffffff',
              },
              cart: {
                'background-color': '#393939',
              },
              footer: {
                'background-color': '#393939',
              },
            },
            text: {
              title: 'Kosár',
              total: 'Végösszeg',
              empty: 'A kosaradban még nincs termék!',
              notice:
                'A szállítási költség és a kupon megadási lehetőség a kasszánál történik.',
              button: 'Kasszához',
            },
            popup: false,
          },
          toggle: {
            iframe: true,
            //            'sticky': false,
            contents: {
              count: true,
              icon: true,
              title: false,
            },
            styles: {
              toggle: {
                'background-color': 'rgba(0,0,0,0.1)',
                ':hover': {
                  'background-color': '#333333',
                },
                ':focus': {
                  'background-color': '#393939',
                },
              },
              count: {
                position: 'relative',
                display: 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                width: '20px',
                height: '20px',
                'margin-bottom': '-2px',
                'margin-left': '10px',
                'background-color': 'rgba(0,0,0,0.4)',
                'border-radius': '100px',
                'font-size': '12px',
                color: '#ffffff',
                ':hover': {
                  color: '#ffffff',
                },
              },
              iconPath: {
                fill: '#ffffff',
              },
            },
            /*            contents: {
              count: false,
              icon: false,
              title: false,
            },    
*/
          },
          lineItem: {
            styles: {
              variantTitle: {
                color: '#ffffff',
              },
              title: {
                color: '#ffffff',
              },
              price: {
                color: '#ffffff',
              },
              fullPrice: {
                color: '#ffffff',
              },
              discount: {
                color: '#ffffff',
              },
              discountIcon: {
                fill: '#ffffff',
              },
              quantity: {
                color: '#ffffff',
              },
              quantityIncrement: {
                color: '#ffffff',
                'border-color': '#ffffff',
              },
              quantityDecrement: {
                color: '#ffffff',
                'border-color': '#ffffff',
              },
              quantityInput: {
                color: '#ffffff',
                'border-color': '#ffffff',
              },
            },
          },
        },
      });
    });
  }
}

if (whichURL === diffuserURL) {
  shopifyCall(
    diffuserVariantID[glassID]['stick'][stickID]['fragrance'][fragranceID].id,
    pageID
  );
} else {
  shopifyCall(fragrancesVariantID[fragranceID]['stick'][stickID].id, pageID);
}

/*setTimeout(function(){      
      document.getElementsByClassName('shopify-buy__btn')[0].remove()
}, 3000)
*/
