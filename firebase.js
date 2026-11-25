import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFQCSOQTG26Bzlb7curVbtdPOBujjhQrg",
  authDomain: "projeto-20072.firebaseapp.com",
  projectId: "projeto-20072",
  storageBucket: "projeto-20072.firebasestorage.app",
  messagingSenderId: "622472973728",
  appId: "1:622472973728:web:ee00424136ea6625d968c5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };