/* var { Storage } = require("@google-cloud/storage");
const projectId = "voiceqube101";
const storage = new Storage({
    projectId: projectId
});

const bucketName = "my-new-bucket";

// Creates the new bucket
storage
    .createBucket(bucketName)
    .then(() => {
        return console.log(`Bucket ${bucketName} created.`);
    })
    .catch(err => {
        return console.error("ERROR:", err);
    });

// console.log(storage);
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const config = require("./config.js");
// admin.initializeApp(functions.config().firebase);
admin.initializeApp(config);
const bucket = admin.storage().bucket();
const bucketAccessConfig = {
    action: "read",
    expires: Date.now() + 1000 * 60 * 60
};

let intentName = "Default_Welcome_Intent";
Path = `${intentName}/${Math.floor(Math.random() * 4) + 1}.ogg`;
console.log(Path);
const soundFileRef = bucket.file(Path);
async function getURL() {
    try {
        await soundFileRef.getSignedURL(bucketAccessConfig, (err, url) => {
            if (err) console.log(err);
            else console.log(url);
        });
    } catch (err) {
        console.log(err);
    }
}
const soundUrl = getURL();
// console.log(soundFileRef);
// console.log(soundUrl);
