const firebase = require('firebase');
const config = require('../config/firebase')
const  firebaseErrorParser = require('../helper/errorparser');


firebase.initializeApp(config);
const auth = firebase.auth();


const UserController = {
  register: (req, res) => {
    const { email, password, username } = req.body;
    return auth.createUserWithEmailAndPassword(email, password)
      .then((userCred) => {
        const { user } = userCred;
        return res.json({ message: 'registration succsessful', user })
      })
      .catch((error) => {
        const { statusCode, message} = firebaseErrorParser(error)
        return res.status(statusCode).json({ error: message });
      })
  },
  login:(req, res) => {
    const { email, password } = req.body;
    return auth.signInWithEmailAndPassword(email, password)
      .then((userCred) => {
        const { user } = userCred;
        return res.json({ message: 'Login succsessful', user })
      })
      .catch((error) => {
        const { statusCode, message} = firebaseErrorParser(error)
        return res.status(statusCode).json({ error: message });
      })
  },

  logout: async(req, res) => {
    try {
      await auth.signOut();
      return res.json({ message: 'logout successful'})
    } catch (error) {
      return res.json({ error })
    }
  }
}

module.exports = UserController;