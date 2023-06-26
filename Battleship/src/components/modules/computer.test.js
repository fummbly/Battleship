const Computer = require('./computer')
const GameBoard = require('./gameboard')

const testGameboard = new GameBoard()
const testComputer = new Computer()

test('Testing that the computer can make a turn', () => {
    const computerCords = testComputer.randomTurn(testGameboard)
    expect(testGameboard.board.get(`${computerCords[0]}, ${computerCords[1]}`)).toMatchObject({
        hasShip: null,
        isHit: true
    })
})