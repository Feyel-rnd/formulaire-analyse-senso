import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyA-dFLCJyEWX4IHK1QKdEvcefSL_fpOeuQ',
  authDomain: 'questionnaire-analyse-senso.firebaseapp.com',
  projectId: 'questionnaire-analyse-senso',
  storageBucket: 'questionnaire-analyse-senso.appspot.com',
  messagingSenderId: '946292792492',
  appId: '1:946292792492:web:f4dd11b237cc8d0b309309',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
