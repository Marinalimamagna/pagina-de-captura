// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("captureForm");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
  
      console.log("Nome:", name);
      console.log("Email:", email);
  
      successMessage.style.display = "block";
  
      form.reset();
    });
  });
  
  