const Player = require("./player")
const GameBoard = require('./gameboard')


const testGameboard = new GameBoard()
const testPlayer = new Player("test")

test('Test for player being able to make a turn', () => {
    testPlayer.takeTurn([0, 0], testGameboard)
    expect(testGameboard.board.get('0, 0')).toMatchObject({
        hasShip: null,
        isHit: true,
    })
})