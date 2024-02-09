// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2VvAvME_2EW10zUwaK-_0CtnUTPZzVhA",
  authDomain: "firedrive-b129a.firebaseapp.com",
  projectId: "firedrive-b129a",
  storageBucket: "firedrive-b129a.appspot.com",
  messagingSenderId: "236607251282",
  appId: "1:236607251282:web:19624cc7787001acb5908b",
 

};

export default firebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage= getStorage(app);
export const database=getFirestore(app)




