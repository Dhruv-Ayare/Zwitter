var firebaseConfig = {
      apiKey: "AIzaSyAAN5CJc43gtpzkblvZ8bCf7vB6WTUz1_s",
      authDomain: "zwitter-4c342.firebaseapp.com",
      databaseURL: "https://zwitter-4c342-default-rtdb.firebaseio.com",
      projectId: "zwitter-4c342",
      storageBucket: "zwitter-4c342.appspot.com",
      messagingSenderId: "337477183204",
      appId: "1:337477183204:web:51253a39aa245c138d2ef1"
    };
    
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    room_name=localStorage.getItem("Room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:username,
                message:msg,
                like:0
                
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_likes(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function update_likes(message_id){
      console.log("Clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}