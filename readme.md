# General Assembly Project 1 : Simple front-end game

### Timeframe
7 days

## Technologies used

* JavaScript (ES6)
* HTML5
* CSS + CSS Animation
* GitHub

## Installation

1. Clone or download the repo
2. Open the `index.html` in your browser of choice

## My Game - Ultimate Tic Tac Toe


You can find a hosted version here ----> https://SebYeates.github.io/Project-01/?fbclid=IwAR0hySPoR0HvS5sd_gPEfkxDCmupcLwPslPsj4QTwH4oWdci_QXdcfKWyGI

### Game overview
Ultimate Tic Tac Toe is a two player game inspired by the the clasic game Tic Tac Toe. The aim is to Win three games in a row. You can only play in the green box that is decided by the last players movement.

### Controls
- New game: "New Game" button ".
- Mouse click to place "X" or "O" depending on the player.
- Player vs Player: 'radio button'


### Game Instructions
1. The game begins with a empty board with where the usser can click anywhere to place "X".

![screenshot - Start Board](https://user-images.githubusercontent.com/44299893/51029692-f4510300-158e-11e9-85db-358a0d1a1bed.png)

2. Once the game begins. The Small game board gets a green border where the next move "O" can be placed. Depending on Who's go it is the Rules box updates. The placement of "O" will decide which small board "X" will play next.

![screenshot - Next play ](https://user-images.githubusercontent.com/44299893/51029780-34b08100-158f-11e9-8af3-5f2ef5c65de7.png)


3. When a player wins a small gameboard the result turns the border color either blue or red depending on the player and adds the class taken so it can't be played again.

![screenshot - Small Board Win](https://user-images.githubusercontent.com/44299893/51029873-8b1dbf80-158f-11e9-9759-0c36fb6566ad.png)


4. If the player selects a small board that has already been won the next player can place their turn anywhere, within a green box like the first move of the game.

![screenshot - Place anywhere ](https://user-images.githubusercontent.com/44299893/51029924-b30d2300-158f-11e9-9e03-dff1cff8a81e.png)


5. When a player has won three small boards in a row. The game can no longer be played and Game results display the winner.

![screenshot - End l](https://user-images.githubusercontent.com/44299893/51029990-f49dce00-158f-11e9-80bf-892a95c675f6.png)


## Process

The starting point for this game was creating the basic grid layout on which the game board would work. This was created by a list of 'div's in the HTML. Each cell within the grid was an individual element. These cells are nestled within a container div called small-board. The small boards were created by applying classes to the elements within the grid.

I used flex to get the small boards to line up to make a Big board. Next I wrote out the possible win conditions (lines) for the big board that could be applied to the small boards, this was done first using letters  A-I later was updated to reflect the index of a array 0-8.

While the game is running, If a user clicks a div (tile)  within a small board the innerHTML is updated with the current player variable also the index of the div clicked (0-8) is logged and applied to update the current game on the big board using the same index number (0-8).

Once I had this mechanics working, I worked on adding a function check win that would take the possible win conditions (lines) and check the small boards for a match using the players variable for the match.

I then moved onto checking the main board for a win using the same logic but creating an Array (maingrid) that stored the results of the small boards for the check win function to interrogate and find a match.

As the game continued to develop I created conditions for the users not to click on "taken" tiles. To do this I used the class name "taken" and made it so the current game would not be able to update the small board or tiles that had the class taken. This became useful for overcoming a draw result on the game.

The final significant element was creating a way to end the game. To do this I used the main grid that was a Array holding the small boards results of "X" or "O". The Check win function would be called to run over the array using the possible win conditions comparing the index value with the players variable. If this returned true, the game would add the class taken to all small boards preventing further play. The final step was updating the Main game results. This was done when the main grid check win function returned true the internal ternary that looked at the players variable and returned either X wins or O wins.  

### Challenges

This game involves quite a lot of javascript logic with different outcomes that the games result is dependant on . It was a challenge to make sure the gaming mechanics were working correctly. It was also important that the code logic that cope with different results and display the correct outcome.


### Wins

This is my first ever game and to end with a project that works is the biggest win.

Adding CSS Animations to the game on results to give a visual representation that the code is working is rewarding.

Taking on a further understanding of Javascript and how it can be used to look for results in the grids. This project has also changed my outlook on how I would plan and create new code.  

I kept to two main principles of D.R.Y Do not repeat and KISS Keep it stupid Simple.


## Future features

If I had more time, I would like to try and make the following;

1, a)  The game playable with one player and a computer element named Hal.
    b) Different levels could be added to the game with different logic pattens of where the computer plays compared to the users last played position. Insted of just ussing math.random on a click event to play a move.

2, I would of liked to make the game responsive so it could be played on a mobile device such as a  mobile phone or ipad.

3, I would also like to improve the animations of the borders they they move around the active games and players won small boards.

4, I'd would of liked to refactor the javascript code further to use (this) also run the CSS in SCSS.

5, Making and adding my own sound effects to the game using HTML5 Audio.
