var LiveForm = require("./LiveForm");
var random = require("./random.js");


module.exports = class Mard extends LiveForm {
    constructor(x, y) {
       super(x,y);
        this.aa = 5;
        
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
        let emptyCells = this.chooseCell(5);
        let newCell = random(emptyCells);

        if (newCell) {
            this.life++;

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;


            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
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
        this.min--;
        let emptyCells = this.chooseCell(0);
        let emptyCells2 = this.chooseCell(1);
        let emptyCellss = this.chooseCell(4);
        let newCell = random(emptyCells.concat(emptyCellss.concat(emptyCells2)));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            
            
            matrix[y][x] = 3 ;
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
