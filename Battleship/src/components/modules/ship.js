function createShip(size) {
    return {
        length: size,
        hits: 0,
        sunk: false,
        hit() {
            this.hits++;
            this.isSunk()
        },
        isSunk() {
            if(this.hits >= this.length) {
                this.sunk = true
                return true;
            }
            return false;
        }
    }
}


export default createShip