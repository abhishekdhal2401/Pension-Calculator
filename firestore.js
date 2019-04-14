// Initialize Firebase
var config = {
  apiKey: "AIzaSyBcgc8BAW5aJsHTnvd6bqyY58JnLQvm2cw",
  authDomain: "pension-calc-b1103.firebaseapp.com",
  databaseURL: "https://pension-calc-b1103.firebaseio.com",
  projectId: "pension-calc-b1103",
  storageBucket: "pension-calc-b1103.appspot.com",
  messagingSenderId: "375483970331"
};
firebase.initializeApp(config);
var firestore=firebase.firestore();

var send = document.querySelector("#fireStore");
var name = document.querySelector("#name");

send.addEventListener("click",function(){
  var email = document.querySelector("#email").value;
  var username = document.querySelector("#name").value;
  var comments = document.querySelector("#comments").value;
  var docRef = firestore.collection("users").doc(email);

  docRef.set({
    Username: username,
    Message: comments,
    Email: email
  }).then(function(){
      console.log("successful");
  }).catch(function(error){
      console.log(error);
  });
});
