 import firebase from 'firebase/app';
 import 'firebase/firestore'; //this is the database
 import 'firebase/auth'; //using firebase auth method
 import 'firebase/analytics';
 
 // Your web app's Firebase configuration
 export const fbConfig = {
    apiKey:process.env.REACT_APP_APIKEY,
    authDomain: "redux-react-project-management.firebaseapp.com",
    databaseURL: "https://redux-react-project-management.firebaseio.com",
    projectId: "redux-react-project-management",
    storageBucket: "redux-react-project-management.appspot.com",
    messagingSenderId: "281827629007",
    appId:process.env.REACT_APP_APPID,
    measurementId: "G-4L2PEYDXSX",
    userProfile:'users', //get the firebase Profile information from fireStore's collection users based on the 
    useFirestoreForProfile:true //firestore for firebase Profile instead of Realtime DB
  };


  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  // firebase.firestore().settings({timestampsInSnapshots:true}) is no longer required 
  firebase.analytics();
  firebase.firestore();

  export default firebase;

  //with react-scripts@0.2.3 and higher, you can set env vairable starting with REACT_APP_<name> and 
 //and access it by process.env.REACT_APP_<name> ,make sure you restart the server after set the env file

