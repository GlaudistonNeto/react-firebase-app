import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyATTnSfdUbvXES8R_rjYZlCv2LzqWSrGuE",
  authDomain: "curso-vue-aaa35.firebaseapp.com",
  databaseURL: "https://curso-vue-aaa35.firebaseio.com",
  projectId: "curso-vue-aaa35",
  storageBucket: "curso-vue-aaa35.appspot.com",
  messagingSenderId: "469864063252",
  appId: "1:469864063252:web:7df65ad47da9f04c146201",
  measurementId: "G-0TVNJEK0MN"
};

firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
