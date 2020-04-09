//Set slideshow var
var slideNum = 0;

//Call Function
slideShow();

//SlideShow Function
function slideShow() {
  var i; //Counter
  var pic = document.getElementsByClassName("myPic");  //Grab the pictures
  for (i = 0; i < pic.length; i++) {
    pic[i].style.display = "none";
  }
  slideNum++;  //increment picture shown
  if (slideNum > pic.length) {slideNum = 1}
  pic[slideNum-1].style.display = "block";
  
  //Time between pictures
  setTimeout(slideShow, 5000);
}





//Form Elements
var fName;
var lName;
var Selection;
var email;

//Var for message
var msg;
var error;

//Submit Button Press
function submitFunc() {
  //Get Vars from Form
  fName = document.getElementById("myForm").elements[1].value;
  lName = document.getElementById("myForm").elements[2].value;
  email = document.getElementById("myForm").elements[0].value;
  
  //Set up additional vars
  error = false;
  msg = "";
  
  //Check to make sure fiels are full
  if (fName == ""){
	msg += "Error: No First Name.\n";
	error = true;
  }
  if (lName == ""){
	msg += "Error: No Last Name.\n";
	error = true;
  }
  if (email == ""){
	msg += "Error: No Email Address.\n";
	error = true;
  }
  
  //If all checks pass
  if (error == false) {
	alert("Thank you " + fName + " " + lName + "!\nSomeone Will contact you via email");
  }else{
	alert(msg);
  }
}

//When button clicked
document.getElementById("myForm").onsubmit = function(){submitFunc()};