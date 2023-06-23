class GameBoard {
    constructor(board) {
        this.board = board || new Map()

        if(this.board.size === 0) {
            this.populateBoard()
        }
    }

    populateBoard() {
        for(let x = 0; x < 10; x++) {
            for(let y = 0; y < 10; y++) {
                this.board.set(`${x}, ${y}`, {
                    hasShip: null,
                    isHit: false
                })
            }
        }
    }

    addShip(ship, cords, orientation) {
        
        if(this.board.get(`${cords[0]}, ${cords[1]}`) !== null) return;
        for(let i = 0; i < ship.length; i++) {
            if(orientation === 0) {
                this.board.get(`${cords[0] + i}, ${cords[1]}`).hasShip = ship

            }
            else if (orientation === 1) {
                this.board.get(`${cords[0]}, ${cords[1]}`).hasShip = ship
            }
            else {
                return
            }
        } 
    }
}

module.exports = GameBoard