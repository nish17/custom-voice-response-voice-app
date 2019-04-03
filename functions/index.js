/* https://medium.com/google-developers/using-cloud-storage-for-firebase-for-hosting-rich-media-in-your-actions-a838977eb758 */

"use strict";
const { dialogflow } = require("actions-on-google");
const app = dialogflow();
let Path = "";
const config = require("./config.js");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(config);
// admin.initializeApp(functions.config().firebase);
const bucket = admin.storage().bucket();
const bucketAccessConfig = {
    action: "read",
    expires: Date.now() + 1000 * 60 * 60
};

app.intent("Default Welcome Intent", conv => {
    /*  Approach 1
    let intentName = "Default_Welcome_Intent";
    Path = `${intentName}/${Math.floor(Math.random() * 4) + 1}.ogg`;
    const soundFileRef = bucket.file(Path);
    const soundUrl = await soundFileRef.getSignedUrl(bucketAccessConfig);
 */ const [
        soundUrl
    ] = `https://soundcloud.com/nimesh-solanki/defaultwelcomeintent1`;
    conv.ask(
        `<speak>hello world welcome intent <audio src=${soundUrl}/></speak>`
    );
});

app.intent("Default Fallback Intent", conv => {
    /* let intentName = "Default_Fallback_Intent";
    Path = `${intentName}/${Math.floor(Math.random() * 6) + 1}.ogg`;
    const soundFileRef = bucket.file(Path);
    const soundUrl = await soundFileRef.getSignedUrl(bucketAccessConfig);
     */

    const [
        soundUrl
    ] = `https://soundcloud.com/nimesh-solanki/defaultfallbackintent1`;
    conv.ask(
        `<speak>hello world default fallback intent <audio src=${soundUrl}/></speak>`
    );
});

app.intent("About Intent", conv => {
    /*     let intentName = "About_Intent";
    Path = `${intentName}/${Math.floor(Math.random() * 2) + 1}.ogg`;
    const soundFileRef = bucket.file(Path);
    const soundUrl = await soundFileRef.getSignedUrl(bucketAccessConfig); */
    const soundUrl = `https://soundcloud.com/nimesh-solanki/aboutintent1`;
    conv.ask(
        `<speak>hello world about intent <audio src=${soundUrl}/></speak>`
    );
});

app.intent("Founder Intent", conv => {
    /* let intentName = "Founder_Intent";
    Path = `${intentName}/${Math.floor(Math.random() * 2) + 1}.ogg`;
    const soundFileRef = bucket.file(Path);
    const soundUrl = await soundFileRef.getSignedUrl(bucketAccessConfig); */
    const soundUrl = `https://soundcloud.com/nimesh-solanki/founderintent1`;
    conv.ask(
        `<speak>hello world founder intent <audio src=${soundUrl}/></speak>`
    );
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
