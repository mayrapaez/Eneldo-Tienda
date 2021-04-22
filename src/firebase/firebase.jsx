import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDcmYb45ZJCrr73xRFJQDGW1Ri1V8ySH5k",
    authDomain: "enaldo-app.firebaseapp.com",
    projectId: "enaldo-app",
    storageBucket: "enaldo-app.appspot.com",
    messagingSenderId: "206378820117",
    appId: "1:206378820117:web:6a6404c54195c40858e41c"
    });
    
    export const getFirebase = () => {
      return app;
  };
  
  export const getFirestore = () => {
      return firebase.firestore(app);
  };