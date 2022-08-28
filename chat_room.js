var firebaseConfig = {
  apiKey:"AIzaSyAk_gg7lHoMJdVlisKbiUd35idJDg-P9s",
  authDomain: "social-e5855.firebaseapp.com",
  databaseURL: "https://social-e5855-default-rtdb.firebaseio.com",
  projectId: "social-e5855",
  storageBucket:"social-e5855.appspot.com",
  messagingSenderId: "671543009162",
  appId: "1:671543009162:web:a881fdddf02bf05c08b273"
};
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