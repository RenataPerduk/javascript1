function makeMessage (name, price) {
  // Write your code under this line
   const message = `You chose ${name}, price per item is ${price} credits`;
  // Write your code above this line
  return message;
};

 let result = makeMessage(('Radar','Scanner','Reactor','Engine'),(6150,3500,8000,4070));