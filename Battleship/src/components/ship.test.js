const createShip = require('./ship')

const testShip = createShip(3)

test('Testing if createShip returns an object with a length, hits, sunk, hit(), and isSunk()', () => {
    expect(testShip).toMatchObject({
        length: 3,
        hits: 0,
        sunk: false,
        hit: expect.any(Function),
        isSunk: expect.any(Function)
    })
})

test('Testing if the hit function works properly', () => {
    testShip.hit()
    expect(testShip).toMatchObject({
        length: 3,
        hits: 1,
        sunk: false,
        hit: expect.any(Function),
        isSunk: expect.any(Function)
    })
})

test('Testing if the isSunk function works properly', () => {
    testShip.hit()
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBeTruthy()
    expect(testShip).toMatchObject( {
        length: 3,
        hits: 4,
        sunk: true,
        hit: expect.any(Function),
        isSunk: expect.any(Function)
    })
})