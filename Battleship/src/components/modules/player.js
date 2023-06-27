class Player {

    constructor(name) {
        this.name = name
    }

    takeTurn(cords, board) {
        board.receiveAttack(cords)
    }

}

export default Player