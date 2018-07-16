import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.VUE_APP_FIREBASE_APP}.firebaseapp.com`,
  databaseURL: `https://${
    process.env.VUE_APP_FIREBASE_APP
  }.firebaseio.com`,
  projectId: process.env.VUE_APP_FIREBASE_APP,
  storageBucket: `${process.env.VUE_APP_FIREBASE_APP}.appspot.com`,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING,
};

const base = firebase.initializeApp(config);

const db = base.database();

export { base, db };
