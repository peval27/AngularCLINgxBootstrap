import * as firebase from "firebase";

export const common = {
    firebase: {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
    }
}

firebase.initializeApp(common.firebase);
