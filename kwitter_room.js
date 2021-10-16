// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtwBpTuF-cnpZOFZXMS9HLkTp82F2EVwE",
    authDomain: "kwitterp-8fcb9.firebaseapp.com",
    projectId: "kwitterp-8fcb9",
    storageBucket: "kwitterp-8fcb9.appspot.com",
    messagingSenderId: "380589697877",
    appId: "1:380589697877:web:6fc4c05284db3cd1df9ddc",
    measurementId: "G-0ETSEK1JRX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
