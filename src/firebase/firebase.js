import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAjDSrE-7Tt2FlbOMNaTUILHx_El_sNeKw",
    authDomain: "expensify-3b708.firebaseapp.com",
    databaseURL: "https://expensify-3b708-default-rtdb.firebaseio.com",
    projectId: "expensify-3b708",
    storageBucket: "expensify-3b708.appspot.com",
    messagingSenderId: "311655482305",
    appId: "1:311655482305:web:62786fe3d1bca423486540",
    measurementId: "G-GR894NZPQR"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default};













//   database.ref('expenses').push({
//       description : 'Dummy data',
//       notes : '',
//       createdAt : 100,
//       amount : 500
//   });
//   database.ref('expenses').push({
//     description : 'Dummy data 2',
//     notes : 'Dummy',
//     createdAt : 500,
//     amount : 2000
// });
// database.ref('expenses').push({
//     description : 'Dummy data 3',
//     notes : '',
//     createdAt : -1000,
//     amount : 700
// });


// database.ref('expenses')
// .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//         id : childSnapshot.key,
//         ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses')
// .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses')
// .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });





//   const database = firebase.database();
//   database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.Company}`);
//   });



//   database.ref().on('value' , (snapshot) => {
//     console.log(snapshot.val());
//   });

//   setTimeout(() => {
//         database.ref('age').set(26);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);




//   database.ref('job').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log("Error Fetching data", e);
//   });



//   database.ref().set({
//     name : 'Satvik Sabharwal',
//     age : 23,
//     stressLevel : 6,
//     job : {
//         title : 'Software Developer',
//         Company : 'Wipro'
//     },
//     location : {
//         city : 'Bareilly',
//         country : 'India'
//     }
//   }).then(() => {
//     console.log("Data is Saved");
//   }).catch((e) => {
//     console.log("This is failed.",e);
//   });
 
// // database.ref('isSingle').remove().then(() => {
// //     console.log("Data is deleted");
// // }).catch((e) => {
// //     console.log("Met with an error : ", e);
// // });

// database.ref().update({
//    stressLevel : 9,
//    'job/Company' : 'Amazon',
//    'location/city' : 'Bangalore'
// });




