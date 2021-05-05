function getShippingCost(country) {
  let message;
  // Write your code under this line
let price;
  switch(country){
    case 'China':
      price = 100;
      break;
      
      case 'Chile':
      price = 250;
      break;
      
      case 'Australia':
      price = 170;
      break;
      
      case 'Jamaica':
      price = 120;
  break;
    default: message = 'Sorry, there is no delivery to your country';
  }
  if (price) {
  message = `Shipping to ${country} will cost ${price} credits`;
  }
  // Write your code above this line
  return message;
}