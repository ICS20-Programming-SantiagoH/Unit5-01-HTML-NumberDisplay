// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function tells the user what numbers are in between their min and max
 */
function enterClicked() {  

  // Collecting user min and max
  let min = parseInt(document.getElementById('min').value)
  let max = parseInt(document.getElementById('max').value)
  
  // declaring variables for message and counter
  let message = "";
  let counter = min;
  
  //if statement when user enter no min or max
  
  if (isNaN(min) || isNaN(max)){
  message ="Please Enter a Min and/or Max"
}
  
  //if statement when user enter invalid min
  
  else if (counter > max){
    message ="Please enter a Min that is Less than the Max"
  }
  
  else {
  //while statement for the number that will be displayed
    while (counter <= max){
//Number with line break
      message = message + counter + ", "
      //Add to counter
      counter = counter + 1;
    }
  }
// Display Results back to User
document.getElementById("result").innerHTML = message
}