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
    document.getElementById("user_name").innerHTML="welcome "+username+"!!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding room name"
          });
          localStorage.setItem("Room_name",room_name);
          window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomname(name){
console.log(name);
localStorage.setItem("Room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}