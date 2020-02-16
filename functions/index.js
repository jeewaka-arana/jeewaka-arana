const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);


let db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });




    // exports.newSubscriberNotification = functions.firestore.document('Patients/{userId}/Appointments/{docId}')
    // .onCreate((snap, context) => {

    //   //You get the values of the newly created doc as follows:
    //   const newValue = snap.data();
    //   console.log(newValue);

    //   //You get the parameters as follows:
    //   const userId = context.params.userId;
    //   console.log(userId);

    //   // You perform here the notification sending:
    //   const docId = context.params.docId;
    //   console.log(docId);

    //  return snap.ref.set({
    //     flag:true
    //   }, {merge: true});
      
  
      

      
    // });


  exports.addappointment=functions.firestore.document('Appointments/{docId}')
.onCreate((snap,context)=>{
     //You get the values of the newly created doc 
      const newValue = snap.data();
     console.log(newValue);

      //You get the parameters as follows
      const docId = context.params.docId;
      console.log(docId);

      
      let docap = db.collection('Doctors').doc(newValue.DoctorId).collection('Appointments')
                  .doc(docId).set({
                      PatientName:newValue.PatientName,
                      PhoneNumber:newValue.PhoneNumber,
                      PatientID:newValue.PatientID,
                      Email:newValue.Email,
                      Fulldate:newValue.Fulldate,
                      Time:newValue.Time,
                      Day:newValue.Day,
                      Month:newValue.Month,
                      Year:newValue.Year
                  },{merge:true});

      let patap=db.collection('Patients').doc(newValue.PatientID).collection('Appointments').doc(docId)
                  .set({
                    DoctorName:newValue.DoctorName,
                    DoctorId:newValue.DoctorId,
                    Fulldate:newValue.Fulldate,
                    Time:newValue.Time,
                    Day:newValue.Day,
                    Month:newValue.Month,
                    Year:newValue.Year
                  },{merge:true});

      
           return docap,patap;


  
      
});


exports.notifyPatient=functions.firestore.document('Doctors/{userId}/Appointments/{docId}')
.onDelete((snap, context) => {
    const deletedValue = snap.data();
    console.log(deletedValue);


    const docId = context.params.docId;
    console.log(docId);


    let notifypat = db.collection('Patients').doc(deletedValue.PatientID).collection('Appointments').doc(docId)
                    .set({
                        Status:"Deleted"
                    },{merge:true});

    let updateap = db.collection('Appointments').doc(docId).set({ Status:"Deleted"},{merge:true});


    return notifypat,updateap;

});


exports.notifyDoctor=functions.firestore.document('Patients/{userId}/Appointments/{docId}')
.onDelete((snap, context) => {
    const deletedValue = snap.data();
    console.log(deletedValue);


    const docId = context.params.docId;
    console.log(docId);


    let notifydoc = db.collection('Doctors').doc(deletedValue.DoctorId).collection('Appointments').doc(docId)
                    .set({
                        Status:"Deleted"
                    },{merge:true});

    let updateap = db.collection('Appointments').doc(docId).set({ Status:"Deleted"},{merge:true});


    return notifydoc,updateap;
    
}); 

    
