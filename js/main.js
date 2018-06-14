// select all buttons with class "toggle"

let buttons = document.querySelectorAll(".toggle");
let buttonsCount = buttons.length;

// select all panels with class "info"

let panels = document.getElementsByClassName("info");
let panelsCount = panels.length;

// select all buttons with class "contact"

let contacts = document.querySelectorAll(".contact");
let contactsCount = contacts.length;

// select all ul with class "bio"

let bios = document.getElementsByClassName("bio");
let biosCount = bios.length;

// initialize summary

let summary = [];
let summaryList = [];
let summaryAll = [];

let popup = document.getElementsByClassName("popup");

popup[0].style.display = "none";

var i;

// set initial display style of info panels to none

for (i = 0; i < panelsCount; i++) {
  panels[i].style.display = "none";
}

// create summary of information in bio ul (contact info)

for (i = 0; i < biosCount; i++) {
  summary = bios[i].innerHTML;
        
    // add to an array
    summaryList = summary.split(",");
        
    summaryAll.push(summaryList); 
    
}
    
// set initial display style of bio cards to none

for (i = 0; i < biosCount; i++) {
  bios[i].style.display = "none";  
}

// add event listener to all toggle buttons

for (i = 0; i < buttonsCount; i++) {
  buttons[i].addEventListener("click", function() {

// target info panel
  
  let info = this.nextElementSibling;
  
// switch panel style display
    
    if (info.style.display === "none") {
      info.style.display = "block";
    
    } else {
      info.style.display = "none";
    }       
  }); 
}   

// add event listener to all contact icon buttons to show contact info

for (i = 0; i < contactsCount; i++){

  contacts[i].addEventListener("click", function() {

 // target bio ul
  
  let bio = this.nextElementSibling;
      
  // switch contact bio display
  
    if (bio.style.display === "none") {
      bio.style.display = "block";
    }
  });
}

// add second event listener to contact icon buttons to close contact info

for (i = 0; i < contactsCount; i++){

  contacts[i].addEventListener("dblclick", function() {

  // target bio ul
    
  let bio = this.nextElementSibling;
  
  // switch contact bio display
  
    if (bio.style.display === "block"){
      bio.style.display = "none";
    }    
  });  
}

// add event listener to summary button to display/hide summary list

document.getElementById("summary").addEventListener("click", function(){
            
    if (popup[0].style.display === "none"){
    
      popup[0].style.display = "block";
      popup[0].innerHTML = `${summaryAll}`;
    
      } else {
      
        popup[0].style.display = "none";
      }
});