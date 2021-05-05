function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Write your code under this line
    const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in the order amount.`;
  // Write your code above this line
  return message;
}
 
let result = makeOrderMessage((2, 4, 10),(100, 300, 70),(50,100,200));