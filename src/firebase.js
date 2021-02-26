import firebase from'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBN2iUWNGNcuo7YFdFpQazhh3tWmJctkUM",
  authDomain: "facebook-messanger-1008c.firebaseapp.com",
  projectId: "facebook-messanger-1008c",
  storageBucket: "facebook-messanger-1008c.appspot.com",
  messagingSenderId: "165439518779",
  appId: "1:165439518779:web:4626a1ee635920078b441e",
  measurementId: "G-J09GYXQ6YF"
});

const db = firebaseApp.firestore();

export default db;