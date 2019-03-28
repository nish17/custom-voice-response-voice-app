"use strict";
const { dialogflow } = require("actions-on-google");
const functions = require("firebase-functions");
const app = dialogflow();
let Path = `https://storage.googleapis.com/voiceqube101.appspot.com`;
app.intent("Default Welcome Intent", conv => {
    let intentName = "Default_Welcome_Intent";

    Path = `${Path}/${intentName}/${Math.floor(Math.random() * 4) + 1}.ogg`;
    conv.ask(`<speak><audio src=${Path}/></speak>`);
});

app.intent("Default Fallback Intent", conv => {
    let intentName = "Default_Fallback_Intent";

    Path = `${Path}/${intentName}/${Math.floor(Math.random() * 6) + 1}.ogg`;
    conv.ask(`<speak><audio src=${Path}/></speak>`);
});

app.intent("About Intent", conv => {
    let intentName = "About_Intent";

    Path = `${Path}/${intentName}/${Math.floor(Math.random() * 2) + 1}.ogg`;
    conv.ask(`<speak><audio src=${Path}/></speak>`);
});

app.intent("Founder Intent", conv => {
    let intentName = "Founder_Intent";

    Path = `${Path}/${intentName}/${Math.floor(Math.random() * 2) + 1}.ogg`;
    conv.ask(`<speak><audio src=${Path}/></speak>`);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
