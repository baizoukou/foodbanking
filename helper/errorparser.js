const firebaseErrorParser = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return {
        statusCode: 409,
        message: error.message
      }
    case 'auth/invalid-email':
      return {
        statusCode: 400,
        message: error.message
      }
    case 'auth/operation-not-allowed':
      return {
        statusCode: 403,
        message: error.message
      }
    case 'auth/weak-password':
      return {
        statusCode: 400,
        message: error.message
      }
    case 'auth/user-disabled':
      return {
        statusCode: 401,
        message: error.message
      }
    case 'auth/user-not-found':
      return {
        statusCode: 404,
        message: error.message
      }
    case 'auth/wrong-password':
      return {
        statusCode: 400,
        message: error.message
      }
    
    case 'auth/network-request-failed':
      return {
        statusCode: 500,
        message: error.message
      }
    default:
      break;
  }
}

module.exports = firebaseErrorParser;