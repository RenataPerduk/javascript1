const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = (orderedQuantity*pricePerDroid+deliveryFee);
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) included in the order amount.`;

console.log(message);