import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { 
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  deleteUser,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyCa7VBL-X-0QYXxGiTGGhiDGPbNGEoUGIU",
    authDomain: "loginfirebaseweb-f4ecb.firebaseapp.com",
    projectId: "loginfirebaseweb-f4ecb",
    storageBucket: "loginfirebaseweb-f4ecb.appspot.com",
    messagingSenderId: "184527021596",
    appId: "1:184527021596:web:4d6c6899255b6f2655e1d9",
    measurementId: "G-ELMCCX5HCH"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider()
const providerFabook = new FacebookAuthProvider()

export const loginvalidation = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout=()=>signOut(auth)

export function see(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href = "../Index.html"
    }
  });
}

//crar nuevo usuario
export const registerAuth = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

//inicio con Google
export const loginGoogle = () => signInWithPopup(auth, providerGoogle)

//mensaje de confirmacion

export const mensajeA = () => sendEmailVerification(auth.currentUser)

//mensaje de cambio de contraseña

export const cambiar = (email) => sendPasswordResetEmail(auth, email)

//inicio sesion con Facebook

export const loginFacebook = () => signInWithPopup(auth, providerFabook)
export const providerFacebook = new FacebookAuthProvider()

//eliminar usuario

export function Deletuser() {
  const user = auth.currentUser
  deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    })
}