const GameBoard = require('./gameboard')

const testGameboard = new GameBoard()

test('Testing that gameboard is created properly', () => {
    expect(testGameboard.board.size).toBeGreaterThan(0)
    for(let x = 0; x < 10; x++) {
        for(let y = 0; y < 10; y++) {
            expect(testGameboard.board.get(`${x}, ${y}`)).toMatchObject({
                hasShip: false,
                isHit: false
            })
        }
    }
})
