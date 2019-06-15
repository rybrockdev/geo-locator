import firebase from 'firebase'
import firestore from 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyAQEVwAQ9UGSYpjTGUqn_GsfwdGMjd-Sn4",
  authDomain: "geo-locator-b5aca.firebaseapp.com",
  databaseURL: "https://geo-locator-b5aca.firebaseio.com",
  projectId: "geo-locator-b5aca",
  storageBucket: "geo-locator-b5aca.appspot.com",
  messagingSenderId: "918694955511",
  appId: "1:918694955511:web:c75d246f141dfc99"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()