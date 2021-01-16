import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCENqs7JM5Wvhy5KB1X1sNI5ySoK3iD5zw",
  authDomain: "student-app-e65d9.firebaseapp.com",
  databaseURL: "https://student-app-e65d9.firebaseio.com",
  projectId: "student-app-e65d9",
  storageBucket: "student-app-e65d9.appspot.com",
  messagingSenderId: "443858486316",
  appId: "1:443858486316:web:7abbb138322c6cdae97d89",
};

firebase.default.initializeApp(firebaseConfig);

export default firebase;