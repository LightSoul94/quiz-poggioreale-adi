import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwzoEJ8mtStvnWbWfhKamWiFN9xcDumz4",
    authDomain: "quiz-poggioreale-adi.firebaseapp.com",
    projectId: "quiz-poggioreale-adi",
    storageBucket: "quiz-poggioreale-adi.appspot.com",
    messagingSenderId: "837178941245",
    appId: "1:837178941245:web:0f699bb7b69398f307af54"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getQuestionsFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, 'questions'));
    const questions = [];
    querySnapshot.forEach((doc) => {
        questions.push({ id: doc.id, ...doc.data() });
    });
    return questions;
};