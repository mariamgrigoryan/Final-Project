
var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Pos extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.aaa = 40;
        

        
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    eat() {
        let emptyCells = this.chooseCell(3);
        let emptyCells23 = this.chooseCell(2);
        let emptyCells26 = this.chooseCell(1);

        let newCell = random(emptyCells.concat(emptyCells23.concat(emptyCells26)));

        if (newCell) {
            this.aaa++;
           
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;


            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            for (let i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;
        }
    }
}