"use strict";
const { dialogflow } = require("actions-on-google");
const functions = require("firebase-functions");

const app = dialogflow();
var firebase = require("firebase-admin");

var config = {
    apiKey: "AIzaSyA1xYWyaoXGYUXR95xh6xxcDH5ZS_f-wfk",
    authDomain: "voiceqube101.firebaseapp.com",
    databaseURL: "https://voiceqube101.firebaseio.com",
    projectId: "voiceqube101",
    storageBucket: "voiceqube101.appspot.com",
    messagingSenderId: "934017353652"
};
firebase.initializeApp(config);
let storage = firebase.storage();
let Path = "";
app.intent("Default Welcome Intent", conv => {
    let intentName = "Default_Welcome_Intent";

    Path = `${intentName}/${Math.floor(Math.random() * 4) + 1}.ogg`;
    storage
        .child(Path)
        .getDownloadURL()
        .then(url => conv.ask(`<speak><audio src=${url}/></speak>`))
        .catch(e => {
            console.log(e);
        });
});

app.intent("Default Fallback Intent", conv => {
    let intentName = "Default_Fallback_Intent";

    Path = `${intentName}/${Math.floor(Math.random() * 6) + 1}.ogg`;
    storage
        .child(Path)
        .getDownloadURL()
        .then(url => conv.ask(`<speak><audio src=${url}/></speak>`))
        .catch(e => {
            console.log(e);
        });
});

app.intent("About Intent", conv => {
    let intentName = "About_Intent";

    Path = `${intentName}/${Math.floor(Math.random() * 2) + 1}.ogg`;
    storage
        .child(Path)
        .getDownloadURL()
        .then(url => conv.ask(`<speak><audio src=${url}/></speak>`))
        .catch(e => {
            console.log(e);
        });
});

app.intent("Founder Intent", conv => {
    let intentName = "Founder_Intent";

    Path = `${intentName}/${Math.floor(Math.random() * 2) + 1}.ogg`;
    storage
        .child(Path)
        .getDownloadURL()
        .then(url => conv.ask(`<speak><audio src=${url}/></speak>`))
        .catch(e => {
            console.log(e);
        });
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
