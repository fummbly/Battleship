class UI {
    static renderGameboard(board) {
        const boardDiv = document.createElement('div')
        boardDiv.classList.add('board-div')
        for(let key of board.board.keys()) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            const splitKey = key.split(", ")
            cell.dataset.x = splitKey[0]
            cell.dataset.y = splitKey[1]
            if(board.board.get(key).hasShip) {
                cell.classList.add('ship')
            }
            if(board.board.get(key).isHit) {
                cell.classList.add('hit')
            }
            cell.addEventListener('click', () => {
                board.receiveAttack([cell.dataset.x, cell.dataset.y])
            })
            cell.innerHTML = key
            boardDiv.appendChild(cell)
        }

        return boardDiv

    }
}

export default UI