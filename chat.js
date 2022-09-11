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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



