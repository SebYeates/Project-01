document.addEventListener('DOMContentLoaded', () => {

  // --- Variables ---
  let player = 'X'
  const refresh = document.querySelector('button')
  const gameBoard = document.querySelector('.game')
  const boards = Array.from(gameBoard.querySelectorAll('.small-board'))
  const results = document.querySelector('.results')
  const gameresults = document.querySelector('.gameresults')
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [0,3,6],
    [1,4,7],
    [6,4,2],
    [0,4,8]
  ]
  const mainGrid = [
    '','','',
    '','','',
    '','',''
  ]

  boards.forEach(board => {
    // Array.from turns the children of the board into a normal array
    Array.from(board.children).forEach(tile => {
      tile.addEventListener('click', handleClick)
    })
  })


  function handleClick(e) {
    const boardThatWasClickedOn = e.target.parentNode
    if(!boardThatWasClickedOn.classList.contains('current')) return false
    if(e.target.classList.contains('taken')) return false
    //--- Array of tiles is built from the parentNode ---
    const tiles = Array.from(boardThatWasClickedOn.children)
    const index = tiles.indexOf(e.target)
    const boardIndex = boards.indexOf(boardThatWasClickedOn)


    //--- Using the event target this Changes in the HTML of Child to X|| O---
    e.target.innerHTML = player
    //--- Adds the class Taken so the cell cant be changed ---
    e.target.classList.add('taken', 'animated', 'flip')

    // //---Check win ---

    const grid = tiles.map(tile => tile.innerHTML)
    if(checkWin(grid)) {
      mainGrid[boardIndex] = player
      boardThatWasClickedOn.classList.add('taken')
      console.log(checkWin(mainGrid))

      if (player === 'X' && mainGrid === true){
        gameresults.innerHTML = 'X wins'
      }else{
        (player === 'O' && mainGrid === true)
        gameresults.innerHTML = 'O wins'
      }
    }

    function checkWin(grid){

      const linesToCheck = lines.map(line => line.map(index => grid[index]))
      // checks each line
      // if some of them, (ie 1 or more lines) are winning lines returns true
      // otherwise returns false
      return linesToCheck.some(line => {
        // gets the moves of that line eg: ['X', '', 'X'], ['O', 'X', '']
        // decides if all the moves match the player eg: ['X', 'X', 'X'] === true
        const isAWinningLine = line.every(move => move === player)

        if (player === 'X' && isAWinningLine === true){
          return e.target.parentNode.classList.add('xwin', 'animated', 'flip')
        }
        if (player === 'O' && isAWinningLine === true){
          return e.target.parentNode.classList.add('owin', 'animated', 'flip')
        }

        return isAWinningLine
      })
    }



    // --- Switch between players ---
    player = player === 'O' ? 'X' : 'O'
    // results turn
    results.innerHTML = (player === 'O') ? 'O Turn' : 'X Turn'
    // --- This removes the old 'current' class and appies it to the new bord classas 'current'---
    // This removes the current class from the previous clicked on square
    //applies it to the new clicked square unless it has the class of taken.

    if(tiles.every(tile => tile.classList.contains('taken'))) {
      boardThatWasClickedOn.classList.add('taken')
    }

    boards.forEach(board => board.classList.remove('current'))
    boardThatWasClickedOn.classList.remove('current')

    if (boards[index].classList.contains('taken')){
      boards.forEach(board => {
        if(!board.classList.contains('taken')) board.classList.add('current')
      })
    } else {
      boards[index].classList.add('current')
    }
  }


  //---Restart Game---

  function refreshPage() {
    window.location.reload()
  }
  refresh.addEventListener('click', refreshPage)


})
