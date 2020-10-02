import firebase from "firebase";

/**
 * 1.In the below code we mentioned the full key that is going to connect our back end.
 */

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAeLW9-eTqJn0XyjOrIv0LgCn-4q_vVR6k",
        authDomain: "todo-app-2bd5a.firebaseapp.com",
        databaseURL: "https://todo-app-2bd5a.firebaseio.com",
        projectId: "todo-app-2bd5a",
        storageBucket: "todo-app-2bd5a.appspot.com",
        messagingSenderId: "987286767777",
        appId: "1:987286767777:web:8ed0ed9aed5eaeddcec8e0",
        measurementId: "G-V2ES1M3S2D"    
});

const db = firebaseApp.firestore(); // we are storing in the variable called db.
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db };
export default db;
