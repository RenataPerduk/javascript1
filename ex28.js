function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  switch(password) {
    case 'null':
     message = 'Canceled by user!';
      break;
      
    case ADMIN_PASSWORD:
     message = 'Welcome!';
      break;  
    
    default:
     message = 'Access denied, wrong password!'; 
  }