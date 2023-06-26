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
        
        if(this.board.get(`${cords[0]}, ${cords[1]}`).hasShip !== null) return;
        if(this.#checkCords(cords)) return
        if(orientation < 0 || orientation > 1) return
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

    receiveAttack(cords) {
        if(this.#checkCords(cords)) return false;
        const cell = this.board.get(`${cords[0]}, ${cords[1]}`)
        if(cell.isHit) return false;
        if(cell.hasShip) cell.hasShip.hit()
        cell.isHit = true
        return true;
    }

    allShipsSunk() {
        for(const value of this.board.values()) {
            if(value.hasShip) {
                if(!value.hasShip.sunk) return false;
            }
        }

        return true;
    }

    testAttack(cords) {
        if(this.board.get(`${cords[0]}, ${cords[1]}`).isHit) return false;
        return true;
    }


    #checkCords(cords) {
        if(cords[0] < 0 || cords[0] > 9) return true;
        if(cords[1] < 0 || cords[1] > 9) return true;

        return false;
    }
}

module.exports = GameBoard