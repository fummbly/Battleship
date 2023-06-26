class UI {
    static renderGameboard(board) {
        const boardDiv = document.createElement('div')
        boardDiv.classList.add('board-div')
        for(let key of board.board.keys()) {
            const cell = document.createElement('div')
            cell.addEventListener('click', () => {
                board.receiveAttack([cell.dataset.x, cell.dataset.y])
                this.renderCell(cell, key, board)
            })
            this.renderCell(cell, key, board)
            
            boardDiv.appendChild(cell)
        }

        return boardDiv

    }


    

    static renderCell(cell, key, board) {
        cell.classList.add('cell')
        const splitKey = key.split(", ")
        cell.dataset.x = splitKey[0]
        cell.dataset.y = splitKey[1]
        if(board.board.get(key).hasShip) {
            cell.classList.add('ship')
        }
        if(board.board.get(key).isHit && board.board.get(key).hasShip) {
            cell.classList.add('hit')
        } else if(board.board.get(key).isHit && !board.board.get(key).hasShip) {
            cell.classList.add('miss')
        }
        cell.innerHTML = key
    }
}

export default UI