// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCPEFz9iubvV63FG-Wj7mWnRqQN-LsBB30",
    authDomain: "video-player-4fd68.firebaseapp.com",
    projectId: "video-player-4fd68",
    storageBucket: "video-player-4fd68.firebasestorage.app",
    messagingSenderId: "467633053803",
    appId: "1:467633053803:web:fa63ca26957a4d3afe912e",
    measurementId: "G-9PSJ9FJHZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const storage = getStorage(app);