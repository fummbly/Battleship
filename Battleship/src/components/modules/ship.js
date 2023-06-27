function createShip(size, orientation) {
    return {
        length: size,
        hits: 0,
        sunk: false,
        orientation: orientation,
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