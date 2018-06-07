// select all buttons with class toggle, add to array

var buttons = document.querySelectorAll(".toggle");

var buttonsCount = buttons.length;

// select all panels with class info

var panels = document.getElementsByClassName("info");

var panelsCount = panels.length;

var i;

// set initial display style of info panels to none

for (i = 0; i < panelsCount; i++) {
    
    panels[i].style.display = "none";
}

// add event listener to all toggle buttons 

for (i = 0; i < buttonsCount; i++) {
   
  buttons[i].addEventListener("click", function() {

// target info panel  
  
  var info = this.nextElementSibling; 
  
// switch panel style display 
    
    if (info.style.display === "none") {
    info.style.display = "block";
    
    } else {
        
        info.style.display = "none";
    }
       
  });
   
 }   

// add event listener to contact buttons

var contacts = document.querySelectorAll(".contact");

var contactsCount = contacts.length;

// add event listener to all contact icon buttons

for (i = 0; i < contactsCount; i++){

  contacts[i].addEventListener("mouseover", showContact);

}

function showContact () {
    alert('mouseover!');
}




