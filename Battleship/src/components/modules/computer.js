const Player = require('./player')

class Computer extends Player {

    randomTurn(board) {
        
        let cords = this.#getRandomCords()

        while(!board.testAttack(cords)) {
            cords = this.#getRandomCords()
        }

        this.takeTurn(cords, board)
        return cords
    }
    
    #getRandomCords() {
        const x = Math.floor(Math.random() * 9)
        const y = Math.floor(Math.random() * 9)

        return [x, y]
    }

}

module.exports = Computer