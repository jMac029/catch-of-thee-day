import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDU22bK9bxWhRPj27VfqPGlOKONkPMvrOA",
    authDomain: "catch-of-the-day-james-mac.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-james-mac.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named the export
export { firebaseApp };

// this is a default export
export default base;