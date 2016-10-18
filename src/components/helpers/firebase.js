/*
  This file allows us to declare one firebase config point and include throughout all of our components
  Reference: https://github.com/davideast/firebase-react-native-sample/issues/9


  The configuration below points to a sandbox I created on Firebase. Please update this to point to your project of choice.
*/

import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyCCFOJU_MchoKGMc5DEgWmQNIW8bCP8qnw",
  authDomain: "kisoroco.firebaseapp.com",
  databaseURL: "https://kisoroco.firebaseio.com",
  storageBucket: "kisoroco.appspot.com",
  messagingSenderId: "785300707835"
};

export default firebase.initializeApp(config);