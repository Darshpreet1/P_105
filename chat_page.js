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
  room_name = localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', 
  function(snapshot) { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = 
  childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class= 'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button = "<button class='btn btn-warnig' id='"+firebase_message_id+"'  value='"+like+"' onclick='updateLike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:  "+like+"</span></button><hr>";
row = name_with_tag+ message_with_tag +like_button + span_with_tag;
//End code
 } });  }); }
getData();


  function logout()
  {
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location = "index.html"
  }

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }
  function updateLike(message_id)
  {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
    });
  }