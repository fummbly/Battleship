const GameBoard = require('./gameboard')
const createShip = require('./ship')

const testGameboard = new GameBoard()

test('Testing that gameboard is created properly', () => {
    expect(testGameboard.board.size).toBeGreaterThan(0)
    for(let x = 0; x < 10; x++) {
        for(let y = 0; y < 10; y++) {
            expect(testGameboard.board.get(`${x}, ${y}`)).toMatchObject({
                hasShip: null,
                isHit: false
            })
        }
    }
})

test('Testing that the gameboard can add a ship', () => {
    testGameboard.addShip(createShip(3), [0,0], 0)
    expect(testGameboard.board.get("0, 0")).toMatchObject({
        hasShip: {length: 3, hits: 0, sunk: false, },
        isHit: false
    })
    expect(testGameboard.board.get("1, 0")).toMatchObject({
        hasShip: {length: 3, hits: 0, sunk: false, },
        isHit: false
    })
    expect(testGameboard.board.get("2, 0")).toMatchObject({
        hasShip: {length: 3, hits: 0, sunk: false, },
        isHit: false
    })
})

test('Testing that you cant add a ship on a cell that already has a ship', () => {
    testGameboard.addShip(createShip(2), [2, 0], 1) 
    expect(testGameboard.board.get("2, 1")).toMatchObject({
        hasShip: null,
        isHit: false
    })
})

test('Testing the receiveAttack function to see if it will hit a space', () => {
    testGameboard.receiveAttack([9,9])
    expect(testGameboard.board.get('9, 9')).toMatchObject({
        hasShip: null,
        isHit: true,
    })
})

test("Testing the receiveAttack function for hitting a ship", () => {
    testGameboard.receiveAttack([0,0])
    expect(testGameboard.board.get('0, 0')).toMatchObject({
        hasShip: {length: 3, hits: 1, sunk: false,},
        isHit: true
    })
})

test('Testing the allShipsSunk function', () => {
    expect(testGameboard.allShipsSunk()).toBe(false)
    testGameboard.receiveAttack([1, 0])
    testGameboard.receiveAttack([2, 0])
    expect(testGameboard.allShipsSunk()).toBe(true)
})
