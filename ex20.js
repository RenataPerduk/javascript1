function checkStorage(available, ordered) {
  let message;
  // Write your code under this line
if (ordered === 0){
   message = 'There are no products in the order yet';
} else if ( ordered > available){
  message = 'The order is too large, there are not enough items in stock!';
} else {
   message = 'The order is placed, the manager will contact you'
}
  // Write your code above this line
  return message;
}