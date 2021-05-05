function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Write your code under this line
 let totalPrice = pricePerDroid * orderedQuantity;
 if (  totalPrice > customerCredits) {
message = 'Not enough funds on the account!';
} else {
  customerCredits -= totalPrice
message = `You ordered ${orderedQuantity} droids, ${customerCredits} credits left on the account`;
}
  // Write your code above this line
return message;
}