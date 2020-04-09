import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBG9FD6qg5ACByGB3dIRFoQhFjynqOAZcE",
    authDomain: "scheduler-1d87b.firebaseapp.com",
    databaseURL: "https://scheduler-1d87b.firebaseio.com",
    projectId: "scheduler-1d87b",
    storageBucket: "scheduler-1d87b.appspot.com",
    messagingSenderId: "1002665981883",
    appId: "1:1002665981883:web:d2d3d82adef6771a09b69e",
    measurementId: "G-630WLTS45K"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
