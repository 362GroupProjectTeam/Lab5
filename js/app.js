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