import App from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB7MsUy1yiFAyZ4hzJediJpg4NWv_4mN1A",
    authDomain: "sudojo-fcdf0.firebaseapp.com",
    projectId: "sudojo-fcdf0",
    storageBucket: "sudojo-fcdf0.firebasestorage.app",
    messagingSenderId: "189847283768",
    appId: "1:189847283768:web:71d6ec4b974fc58e0e9ecd",
    measurementId: "G-4WVY8BK7FK"
  };
  

export class FirebaseRunner {
    private static _instance: FirebaseRunner | null = null;

    app: App.app.App = App.initializeApp(firebaseConfig);

    static instance(): FirebaseRunner {
        if (!this._instance) {
            this._instance = new FirebaseRunner();
        }
        return this._instance;
    }
}