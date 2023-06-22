function createShip(size) {
    return {
        length: size,
        hits: 0,
        sunk: false,
        hit() {
            this.hits++;
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


const testShip = createShip(3)
console.log(testShip)

module.exports = createShip