function checkForSpam(message) {
  let result;
  // Write your code under this line
 result = message.toLowerCase().includes('spam') ||message.toLowerCase().includes('sale')
  // Write your code above this line
  return result;
}
