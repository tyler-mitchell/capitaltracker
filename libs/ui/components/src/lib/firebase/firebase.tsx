import { initializeApp } from 'firebase/app';

/* eslint-disable-next-line */
export interface FirebaseProps {}

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

export function Firebase(props: FirebaseProps) {
    // Initialize Firebase
    initializeApp(firebaseConfig);
    return null;
}

export default Firebase;
