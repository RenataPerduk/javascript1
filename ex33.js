function formatMessage(message, maxLength) {
  let result;
// Write your code under this line
 if(message.length <= maxLength) {
 result = message;
 } else {
 message = message.slice(0,maxLength) +'...';
   result = message;
 }
// Write your code above this line
  return result;
}
