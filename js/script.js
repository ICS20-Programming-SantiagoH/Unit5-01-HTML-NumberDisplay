// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function tells the user what they have to pay to get in to the museum
 */
function enterClicked() {  

  // declaring numbers variable
  let numbers = "";
  let counter = min;
  
  // Collecting user min and max
  let min = parseInt(document.getElementById('min').value)
  let max = parseInt(document.getElementById('max').value)
  
  
  //Display if user can enter the museum for free
  while (counter <= max) {
    numbers = numbers + counter + "<br>"
    counter = counter + 1
  }
  
  // Display results back to user
  document.getElementById('result').innerHTML = numbers
}