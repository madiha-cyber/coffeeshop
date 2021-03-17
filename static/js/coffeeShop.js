
"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};
// using jQ (called with '$'); add the itemName to the ID '#cart-items' of the table made in index.html

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');
  // saving ID 'cart-total' to variable cartTotal

  let total = Number(cartTotal.html());
  total += price;

  console.log(cartTotal.html());

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
