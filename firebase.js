import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAsZFj2yGIBiaOw-WjLnp9cDuJvFKouWCs',
  authDomain: 'disney-plus-6b1b5.firebaseapp.com',
  projectId: 'disney-plus-6b1b5',
  storageBucket: 'disney-plus-6b1b5.appspot.com',
  messagingSenderId: '439531669372',
  appId: '1:439531669372:web:99b64a4c6e37ccf49106f9',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
const db = app.firestore()

export { db }
