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

function send(){
  var email = document.querySelector("#email").value;
  var username = document.querySelector("#name").value;
  var comments = document.querySelector("#comments").value;
  var docRef = firestore.collection("users").doc(email);

  docRef.set({
    name: username,
    message: comments,
    email: email
  }).then(function(){
      console.log("successful");
  }).catch(function(error){
      console.log(error);
  });
}


var form=document.querySelector("#fireForm");

function jammer(){
  form = document.querySelector("#fireForm");
  if (document.forms['fireForm'].checkValidity()) {
        document.querySelector("#fireStore").setAttribute("type","button");
                send();
                  document.querySelector("#showSuccess").innerHTML="success";
                form.reset();
  }
  else {
    document.querySelector("#showSuccess").innerHTML="";
        document.querySelector("#fireStore").setAttribute("type","submit");
  }
}

form.addEventListener("change",jammer);
