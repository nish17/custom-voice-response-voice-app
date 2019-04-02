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
admin.initializeApp(functions.config().firebase);
const bucket = admin.storage().bucket();
const bucketAccessConfig = {
    action: "read",
    expires: Date.now() + 1000 * 60 * 60
};

let intentName = "Default_Welcome_Intent";
Path = `${intentName}/${Math.floor(Math.random() * 4) + 1}.ogg`;
const soundFileRef = bucket.file(Path);
const [soundUrl] = soundFileRef.getSignedUrl(bucketAccessConfig);
