const functions = require('firebase-functions');


    exports.newSubscriberNotification = functions.firestore.document('Patients/{userId}/Appointments/{docId}')
    .onCreate((snap, context) => {

      //You get the values of the newly created doc as follows:
      const newValue = snap.data();
      console.log(newValue);

      //You get the parameters as follows:
      const userId = context.params.userId;
      console.log(userId);

      // You perform here the notification sending:
      const docId = context.params.docId;
      console.log(docId);

     return snap.ref.set({
        flag:true
      }, {merge: true});
      
  
      

      
    });

    