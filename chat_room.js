//YOUR FIREBASE LINKS
var firebaseConfig = { 
  apiKey: "AIzaSyBYzL7JkCbA4Q6aKPAM3kc2K9qF_jDAJIM", 
  authDomain: "kwitter-cb60b.firebaseapp.com", 
  databaseURL: "https://kwitter-cb60b-default-rtdb.firebaseio.com", 
  projectId: "kwitter-cb60b", 
  storageBucket: "kwitter-cb60b.appspot.com", 
  messagingSenderId: "516968599546", 
  appId: "1:516968599546:web:064789d823bc15105b5e43" }; 
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      function addRoom() { 
        room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
      localStorage.setItem("room_name", room_name);
      window.location = "chat_room.html"; }
      
      function getData() {firebase.database().ref("/").on('value', 
      function(snapshot) {document.getElementById("output").innerHTML =
       "";snapshot.forEach(function(childSnapshot) {childKey  = 
        childSnapshot.key;
        Room_names = childKey;
       //Start code
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"";
       //End code
       });});}
       getData();

       function redirectToRoomName(){
        localStorage.setItem("Room_name", room_name);
        window.location = "chat_page.html";
       }
       function logout()
       {
        localStorage.removeItem("room_name");
        localStorage.removeItem("user_name");
        window.location = "index.html"
       }