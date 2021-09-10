function addToCart() {
  addToCartBTN.click();
  setTimeout(function () {
    for (i = 0; i < cartItemsWF.length; i++) {
      if (
        localStorage.getItem(
          cartItemsWF[i]
            .getElementsByTagName('img')[0]
            .getAttribute('data-wf-bindings')
        ) === null
      ) {
        webflowItemID = cartItemsWF[i]
          .getElementsByTagName('img')[0]
          .getAttribute('data-wf-bindings');
        //                console.log('webflowItemID = '+webflowItemID)
        cartItemsWF[i]
          .getElementsByClassName('plusz-minus-icon minus')[0]
          .setAttribute('onclick', 'itemChange(' + i + ', -1)');
      }
    }
  }, 2000);

  shopifyCall(
    actualVariantID[glassID]['stick'][stickID]['fragrance'][fragranceID].id
  );
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
    document.getElementsByClassName('shopify-buy__btn')[0].remove();
  }, 3000);
  setTimeout(function () {
    for (
      i = 0;
      i < document.getElementsByClassName('shopify-buy__cart-item').length;
      i++
    ) {
      if (
        localStorage.getItem(
          document.getElementsByClassName('shopify-buy__cart-item')[i].id
        ) === null
      ) {
        shopifyItemID = document.getElementsByClassName(
          'shopify-buy__cart-item'
        )[i].id;
        //                console.log('shopifyItemID = '+shopifyItemID)
      }
    }
    //        console.log(webflowItemID, shopifyItemID)
    localStorage.setItem(webflowItemID, shopifyItemID);
    localStorage.setItem(shopifyItemID, webflowItemID);
  }, 5000);
}
