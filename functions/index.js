//the functions folder will be generate after you npm install firebase-tools and then firebase init

const functions = require("firebase-functions"); 
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase); //you can use admin to interact with different services like authentication on the firebase services

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Junjun!");
});


const createNotification=(notification)=>{
    return admin.firestore().collection('notifications')
                .add(notification)
                .then(doc=>console.log('notification added',doc))// it will show the log inside the firebase functions log;
}

exports.projectCreated = functions.firestore.document(
  "projects/{projectId}"
).onCreate(doc=>{
    const project=doc.data();
    const notification={
        content:'Added a new project',
        user:`${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp() //create a timestamp as soon as the notification is created from server
    };

    return createNotification(notification);
});


//create a trigger once the user is created using the auth service
exports.userJoined=functions.auth.user()
.onCreate(user=>{
  
    return admin.firestore().collection('users') 
                .doc(user.uid)//find the user information from firestore using the userid stored inside the auth services(firebase)
                .get()
                .then(doc=>{
                    const newUser=doc.data();
                    const notification={
                        content:'Joined the App',
                        user:`${newUser.firstName} ${newUser.lastName}`,
                        time:admin.firestore.FieldValue.serverTimestamp()
                    }
                    return createNotification(notification);

                });
})

//to deploy these function, we can type 'firebase deploy --only functions' in the terminal and you can 
//see the functions are added inside the firebase functions once they are created.