$(document).ready(function() {
    // Remove item from cart
    $('.cart').on('click', '.remove-item', function() {
      $(this).closest('.cart-item').remove();
      updateTotal();
    });
  });
  
  function updateTotal() {
    var totalPrice = 0;
    $('.item-price').each(function() {
      var price = parseFloat($(this).text().replace('$', ''));
      totalPrice += price;
    });
    $('#total-price').text('$' + totalPrice.toFixed(2));
  }
  