import './style.css'

import GameBoard from "./components/modules/gameboard";
import UI from "./components/ui"
import createShip from './components/modules/ship';
import Computer from './components/modules/computer';
import Player from './components/modules/player';

const app = document.querySelector('#app')
const player = new Player('Player 1')
const computer = new Computer('Computer')

const testBoard = new GameBoard()
testBoard.addShip(createShip(2, 0), [0,0])
testBoard.addShip(createShip(3, 1), [4,2])

const testBoard2 = new GameBoard()
testBoard2.addShip(createShip(2, 0), [4, 4])
testBoard2.addShip(createShip(3, 1), [7,0])

let playerBoard = UI.renderPlayerGameboard(testBoard)
let compBoard = UI.RenderComputerGameboard(testBoard2)


app.appendChild(playerBoard)
app.appendChild(compBoard)



