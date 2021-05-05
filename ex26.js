function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Write your code under this line
message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
  // Write your code above this line
  return message;
}