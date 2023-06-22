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
                    hasShip: false,
                    isHit: false
                })
            }
        }
    }
}

module.exports = GameBoard