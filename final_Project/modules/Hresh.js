var LiveForm = require("./LiveForm");
var random = require ("./random.js");




 module.exports = class Hresh  extends LiveForm {
    constructor(x, y) {
        super(x,y);
        this.life = 30;
        
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

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 6;

            let hresh = new Hresh(x, y);
            hreshArr.push(hresh);

            this.life = 30;
            hreshHashiv++;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(3);
        let newCell = random(emptyCells);

        if (newCell) {
            this.life++;

            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 1
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;


            for (let i in mardArr) {
                if (mardArr[i].x == x && mardArr[i].y == y) {
                    mardArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;

            if (this.life >= 30) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.life--;
        let emptyCells = this.chooseCell(0);
        let emptyCellss = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCellss));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
           
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;
        }
    }
}