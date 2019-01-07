document.addEventListener('DOMContentLoaded', () => {
  const h1 =document.querySelector('h1')
  h1.textContent='Hello World'

  // ----- Variables ------
  const smallTiles = document.querySelectorAll('.smalltile')
  const smallboards = document.querySelectorAll('.smallboard')
  let playerOne = 1

  // -----List of functions-----

  // New game button restarts game.

  function refreshPage() {
    window.location.reload()
  }

  // Change turns // Player 1 uses X (Green) then Player 2/AI uses O (Red) (changes between after each turn)
  smallTiles.forEach(tile => tile.addEventListener('click', playerturn))

  function playerturn (e){
    // console.log(e)
    whichBoard(e)
    if (playerOne === 1) {
      e.target.textContent = 'X'
      e.target.classList.add('xwin')
      playerOne = 0
    } else {
      e.target.textContent = 'O'
      e.target.classList.add('owin')
      playerOne = 1
    }
  }

  // ---- Highlight BORD for currentgame ----

  var lastClickedBoard = smallboards[0]
  var newClickedBoard

  function whichBoard (e) {
    lastClickedBoard.classList.remove('currentgame')

    switch(true){
      case (e.target.classList.contains('A')):
        console.log('Board 1')
        newClickedBoard = smallboards[0]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return
      case (e.target.classList.contains('B')):
        console.log('Board 2')
        newClickedBoard = smallboards[1]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return
      case (e.target.classList.contains('C')):
        console.log('Board 1')
        newClickedBoard = smallboards[2]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return
      case (e.target.classList.contains('D')):
        console.log('Board 2')
        newClickedBoard = smallboards[3]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return
      case (e.target.classList.contains('E')):
        console.log('Board 1')
        newClickedBoard = smallboards[4]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return
      case (e.target.classList.contains('F')):
        console.log('Board 2')
        newClickedBoard = smallboards[5]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return
      case (e.target.classList.contains('G')):
        console.log('Board 1')
        newClickedBoard = smallboards[6]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return
      case (e.target.classList.contains('H')):
        console.log('Board 2')
        newClickedBoard = smallboards[7]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return
      case (e.target.classList.contains('I')):
        console.log('Board 1')
        newClickedBoard = smallboards[8]
        newClickedBoard.classList.add('currentgame')
        lastClickedBoard = newClickedBoard
        return

    }


  }
  // Checkwin // After every turn check win funtion looks for win. Then changes background of smallboard for either player 1/2/AI (ABC, DEF, GHI, ADG, BEH, CFI, AEI, CEG)

  // change background

  // Display Results  // GAME OVER display tie/win/lose (change DIV text in .endgame)

})
