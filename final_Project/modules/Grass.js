
var LiveForm = require("./LiveForm");
var random = require("./random");


module.exports = class Grass extends LiveForm {
    constructor(x, y) {
       super(x,y)
       this.multiply = 0;
       this.life = 5;
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
        this.life++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        
        if (newCell && this.life > 10) {

            let x = newCell[0];
            let y = newCell[1]; 
            grassHashiv++;
           
            matrix[y][x] = 1;

           
            let grass = new Grass(x, y);
            grassArr.push(grass);

            this.life = 0;
        }
    }
}