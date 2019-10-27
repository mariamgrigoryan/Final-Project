var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Gishatich extends LiveForm {
    constructor(x, y) {
      super(x,y);
        this.min = 100;
       
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
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            gishatichHashiv++;
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej grum em MEK -> 1
            matrix[y][x] = 5;

            // sarqum em OBJ lscnum grassArr-i mej 
            let gishatich = new Gishatich(x, y);
            gishatichArr.push(gishatich);

            this.min = 100;
            
        }
    }
    eat() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {
            this.min++;

            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej grum em MEK -> 1
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;

            if (this.min >= 20) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.min--;
        let emptyCells = this.chooseCell(0);
        let emptyCells2 = this.chooseCell(1);
        let emptyCellss = this.chooseCell(4);
        let newCell = random(emptyCells.concat(emptyCells2.concat(emptyCellss)));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            
            // matrixi mej gru mem MEK -> 1
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;
        }
        if (this.min <= 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1)
            }
        }
    }

}