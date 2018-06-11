// select all buttons with class "toggle"

var buttons = document.querySelectorAll(".toggle");
var buttonsCount = buttons.length;

// select all panels with class "info"

var panels = document.getElementsByClassName("info");
var panelsCount = panels.length;

// select all buttons with class "contact"

var contacts = document.querySelectorAll(".contact");
var contactsCount = contacts.length;

// select all spans with class "bio"

var bios = document.getElementsByClassName("bio");
var biosCount = bios.length;

// initialize summary 

var summary = [];
var summaryList = [];
var summaryAll = [];

console.log(summary);
console.log(typeof summary);

var i;

// set initial display style of info panels to none

for (i = 0; i < panelsCount; i++) {    
    panels[i].style.display = "none";
}

// create summary of information in bio spans (contact info)

for (i = 0; i < biosCount; i++) {
    summary = bios[i].innerHTML;    
        
    // add to an array
    summaryList = summary.split(",");
        
    summaryAll.push(summaryList);  
    
    //REMOVE: test code 
        
      if (i === biosCount-1){
        alert("summary all list after push" + `${summaryAll}` + `${biosCount}` + [i]);
      }
}
    
// set initial display style of bio cards to none

for (i = 0; i < biosCount; i++) {      
    
    bios[i].style.display = "none";
  
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

// add event listener to all contact icon buttons to show contact info

for (i = 0; i < contactsCount; i++){

  contacts[i].addEventListener("mouseover", function() {
 // contacts[i].addEventListener("mouseout", hideContact);

 // target bio span
  
  var bio = this.nextElementSibling;
      
  // switch contact bio display
  
    if (bio.style.display === "none") {
        bio.style.display = "block";        
    }
    
  });

}

// add second event listener to contact icon buttons to close contact info

for (i = 0; i < contactsCount; i++){

  contacts[i].addEventListener("dblclick", function() { 

  // target bio span
    
  var bio = this.nextElementSibling;
  
  // switch contact bio display
  
    if (bio.style.display === "block"){
        bio.style.display = "none";
   //  } else {
    //    bio.style.display = "block";
    }
    
  });

}

document.getElementById("summary").addEventListener("click", function(){
    alert(`${summaryAll}`);
});

