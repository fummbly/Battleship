class UI {
    static renderPlayerGameboard(board) {
        const boardDiv = document.createElement('div')
        boardDiv.classList.add('board-div')
        boardDiv.id = "player-board"
        boardDiv.classList.add('show')
        for(let key of board.board.keys()) {
            const cell = document.createElement('div')
            this.renderCell(cell, key, board)
            
            boardDiv.appendChild(cell)
        }

        return boardDiv

    }

    static RenderComputerGameboard(board) {
        const boardDiv = document.createElement('div')
        boardDiv.classList.add('board-div')
        boardDiv.id = "computer-board"
        for(let key of board.board.keys()) {
            const cell = document.createElement('div')
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