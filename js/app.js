document.addEventListener('DOMContentLoaded', () => {
  const h1 =document.querySelector('h1')
  h1.textContent='Hello World'

})

// Player 1 uses X (Green) then Player 2/AI uses O (Red) (changes between after each turn)

// Depending on which tile clicked highlights next smallboard to be played (change .currentgame in CCS)(Each tile has a class A-I)(smallboard has class game1-9)

// After every turn check win funtion looks for win. Then changes background of smallboard for either player 1/2/AI (ABC, DEF, GHI, ADG, BEH, CFI, AEI, CEG)

// GAME OVER display tie/win/lose (change DIV text in .endgame)

//  New game button restarts game.


// -----List of functions-----


// NewGame/reset

// Change turns

// Highlight Box

// Checkwin

// change background

// Display Results
