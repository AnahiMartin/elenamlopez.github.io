'use strict';

var webButton = document.getElementById('web-skill');
var divToDisplay = document.querySelectorAll('.toDisplay');


function animateWebSkill() {
  for (var i = 0; i < divToDisplay.length; i++) {

    divToDisplay[i].classList.toggle('hidden');
  }
}


webButton.addEventListener('click', animateWebSkill);
