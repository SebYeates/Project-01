document.addEventListener('DOMContentLoaded', () => {

  // --- Variables ---
  let player = 'X'
  const refresh = document.querySelector('button')
  const gameBoard = document.querySelector('.game')
  const boards = gameBoard.querySelectorAll('.small-board')

  //--- If click in a div that dose not have class 'current' inner html does not change ---



  function handleClick(e) {
    const boardThatWasClickedOn = e.target.parentNode
    if(!boardThatWasClickedOn.classList.contains('current')) return false
    if(boardThatWasClickedOn.classList.contains('taken')) return false
    if(e.target.classList.contains('taken')) return false
    //--- Array of tiles is built from the parentNode ---
    const tiles = Array.from(e.target.parentNode.children)
    const index = tiles.indexOf(e.target)

    //--- Using the event target this Changes in the HTML of Child to X|| O---
    e.target.innerHTML = player
    //--- Adds the class Taken so the cell cant be changed ---
    e.target.classList.add('taken', 'animated', 'flip')

    // Check for Win
    checkWin(e)

    // --- Switch between players ---
    player = player === 'O' ? 'X' : 'O'
    // --- This removes the old 'current' class and appies it to the new bord classas 'current'---
    // This removes the current class from the previous clicked on square
    //applies it to the new clicked square unless it has the class of taken.
    
    const childArray = Array.from(boards[index].children)
    const hasClass = e => e.classList.contains('taken')

    boardThatWasClickedOn.classList.remove('current')

    if(boards[index].classList.contains('taken')) {
      return boardThatWasClickedOn.classList.add('current')
    } else {
      if (childArray.every(hasClass)) {
        return boardThatWasClickedOn.classList.add('current')
      } else {
        return boards[index].classList.add('current')
      }
    }
  }


  boards.forEach(board => {
    // Array.from turns the children of the board into a normal array
    Array.from(board.children).forEach(tile => {
      tile.addEventListener('click', handleClick)
    })
  })

  // //---Check win ---
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

  function checkWin(e){

    const cells = Array.from(e.target.parentNode.children)
    // checks each line
    // if some of them, (ie 1 or more lines) are winning lines returns true
    // otherwise returns false

    return lines.some(line => {

      // gets the moves of that line eg: ['X', '', 'X'], ['O', 'X', '']
      const rowOfMoves = line.map(index => cells[index].innerHTML)

      // decides if all the moves match the player eg: ['X', 'X', 'X'] === true
      const isAWinningLine = rowOfMoves.every(move => move === player)
      console.log(isAWinningLine)
      if (isAWinningLine === true )
        e.target.parentNode.classList.add('taken', 'animated', 'flip')
      if (player === 'X' && isAWinningLine === true){
        return e.target.parentNode.classList.add('xwin')
      }
      if (player === 'O' && isAWinningLine === true){
        return e.target.parentNode.classList.add('owin')
      }
      return isAWinningLine

    })

  }


  //---Restart Game---
  function refreshPage() {
    window.location.reload()
  }
  refresh.addEventListener('click', refreshPage)


})
