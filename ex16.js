function checkStorage(available, ordered) {
  let message;
  // Write your code under this line
if (ordered > available) {
 message = 'Not enough goods in stock!';
} else  {
 message = 'Order is processed, the manager will contact you';
  }
  // Write your code above this line
  return message;
}