(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var human = "X";
var bot = "O";
var currentPlayer = human;

// Stores all the winning permuatation
var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var state = ["", "", "", "", "", "", "", "", ""];

// DOM elements
var board = document.querySelector('.board');
var squares = document.querySelectorAll('.square');

board.addEventListener("click", function (e) {
  var index = +e.target.getAttribute("data-index");

  // Only allow filling if the square is empty
  if (e.target.innerHTML === "") {

    // Update state in the JS
    state[index] = currentPlayer;

    // Update the game in DOM
    e.target.innerHTML = currentPlayer;

    console.log(state, checkWin(state));

    // After each turn,check if either player has won the game and declare it, the reset the board
    if (checkWin(state)) {
      alert("Game won by " + (currentPlayer == "X" ? "You" : "Dumbass Retard Robot, Shame on you !!!"));
      resetGame();
      return 0;
    }
  }

  // When player selects a sqaure which is already filled
  else {
      alert("Sorry it's already filled!");
      return 0;
    }

  // Switches the currentPlayer
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  setTimeout(BotTurn, 500);
});

// Checks if the game has been won or not
function checkWin(array) {
  for (var i = 0; i < 8; i++) {
    var combo = winningCombos[i];
    if (array[combo[0]] == array[combo[1]] && array[combo[0]] == array[combo[2]] && array[combo[1]] == array[combo[2]] && array[combo[0]] != "") {
      return true;
    }
  }
  return false;
}

// Resets the board and the state of the game
function resetGame() {
  for (var i = 0; i < state.length; i++) {
    state[i] = "";
    squares[i].innerHTML = "";
  }
}

// Basic AI which wins if possible but never loses
function BotTurn() {

  var emptyIndexes = [];

  state.forEach(function (sq, i) {
    if (sq === "") {
      emptyIndexes.push(i);
    }
  });

  console.log(emptyIndexes);

  if (emptyIndexes.length == 0) {
    alert("Nobody won the game");
    resetGame();
    return 0;
  }

  var randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];

  console.log(randomIndex);

  // Update state in the JS
  state[randomIndex] = currentPlayer;

  // Update the game in DOM
  var botSquare = document.querySelector(".square[data-index=\"" + randomIndex + "\"]");

  botSquare.innerHTML = currentPlayer;

  if (checkWin(state)) {
    alert("Game won by " + (currentPlayer == "X" ? "You" : "Dumbass Retard Robot, Shame on you !!!"));
    resetGame();
    currentPlayer = human;
    return 0;
  }

  currentPlayer = "X";
}

},{}]},{},[1]);
