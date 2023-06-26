import './style.css'

import GameBoard from "./components/modules/gameboard";
import UI from "./components/ui"
import createShip from './components/modules/ship';

const app = document.querySelector('#app')

const testBoard = new GameBoard()
testBoard.addShip(createShip(2), [0,0], 0)
testBoard.addShip(createShip(3), [4,2], 1)

testBoard.receiveAttack([5,5])
app.appendChild(UI.renderGameboard(testBoard))


