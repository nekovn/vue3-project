import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDWUUCt-Y-Dp4m0AUaUXqrFrFVxe9hLLTU",
    authDomain: "vue-full-courese.firebaseapp.com",
    databaseURL: 'https://vue-full-courese-default-rtdb.firebaseio.com/',
    projectId: "vue-full-courese",
    storageBucket: "vue-full-courese.appspot.com",
    messagingSenderId: "885838702594",
    appId: "1:885838702594:web:834feb4223b09d6f701f1b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref('chats');
export default firebase;
