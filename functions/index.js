"use strict";
const { dialogflow } = require("actions-on-google");
const app = dialogflow();
let Path = "";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const bucket = admin.storage().bucket();
const bucketAccessConfig = {
    action: "read",
    expires: Date.now() + 1000 * 60 * 60
};

app.intent("Default Welcome Intent", async conv => {
    let intentName = "Default_Welcome_Intent";
    Path = `${intentName}/${Math.floor(Math.random() * 4) + 1}.ogg`;
    const soundFileRef = bucket.file(Path);
    const [soundUrl] = await soundFileRef.getSignedUrl(bucketAccessConfig);
    // console.log(Path);
    // console.log(storage);
    conv.ask(`<speak><audio src=${soundUrl}/></speak>`);
});

app.intent("Default Fallback Intent", conv => {
    let intentName = "Default_Fallback_Intent";

    Path = `${intentName}/${Math.floor(Math.random() * 6) + 1}.ogg`;
    return storage
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
    return storage
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
    return storage
        .child(Path)
        .getDownloadURL()
        .then(url => conv.ask(`<speak><audio src=${url}/></speak>`))
        .catch(e => {
            console.log(e);
        });
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
