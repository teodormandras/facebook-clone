import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWyrdHaJdf6QVqhDfAN3oM0pH6Ns7OHv0",
  authDomain: "copy-center-tmf-9b80e.firebaseapp.com",
  databaseURL: "https://copy-center-tmf-9b80e.firebaseio.com",
  projectId: "copy-center-tmf-9b80e",
  storageBucket: "copy-center-tmf-9b80e.appspot.com",
  messagingSenderId: "603849498777",
  appId: "1:603849498777:web:13730e7d2f0ef2d73a9808"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} 
  export default db
