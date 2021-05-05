function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if ( password === null) { // Complete this line
    message =  'Canceled by user!';
  } else if ( password === 'jqueryismyjam') { // Complete this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}