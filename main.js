// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMOewT18nvi1aXmZiayqv2i0W-_E0U1cY",
    authDomain: "portfolio-61bb1.firebaseapp.com",
    databaseURL: "https://portfolio-61bb1.firebaseio.com/",
    projectId: "portfolio-61bb1",
    storageBucket: "portfolio-61bb1.appspot.com",
    messagingSenderId: "328967892329"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }