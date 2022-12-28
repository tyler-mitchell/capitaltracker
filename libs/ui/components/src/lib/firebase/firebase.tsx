import { initializeApp } from 'firebase/app';
/* eslint-disable-next-line */
export interface FirebaseProps {}
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDRNBHw6LQnByFkUGEFkrOO0pOFRqrsvd4',
    authDomain: 'lifemastery-8f9c1.firebaseapp.com',
    projectId: 'lifemastery-8f9c1',
    storageBucket: 'lifemastery-8f9c1.appspot.com',
    messagingSenderId: '697425312434',
    appId: '1:697425312434:web:a13883dd494fe4692c27ab',
    measurementId: 'G-FYB48VC2MJ',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function Firebase(props: FirebaseProps) {
    console.log(app);
    return null;
}

export default Firebase;
