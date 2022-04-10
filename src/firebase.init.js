// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYuya4krLSA10v_xxm5j6zZ4Ufj0Kq1go",
  authDomain: "ema-john-simple-6563f.firebaseapp.com",
  projectId: "ema-john-simple-6563f",
  storageBucket: "ema-john-simple-6563f.appspot.com",
  messagingSenderId: "676216039672",
  appId: "1:676216039672:web:6162fe2f582321bde4b30d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;