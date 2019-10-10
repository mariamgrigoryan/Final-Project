let matrix = [];
let side = 10;
let grassArr = [];
let grassEaterArr = [];
let gishatichArr = [];
let posArr = [];
let mardArr = [];
function setup() {
    matrixGenerator(40, 100, 15, 12, 7,0, 0);
    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
            if (matrix[y][x] == 4) {
                let pos = new Pos(x, y);
                posArr.push(pos);
            }
            if (matrix[y][x] == 5) {
                let mard = new Mard(x, y);
                mardArr.push(mard);
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater, gishatich, pos, mard) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < gishatich; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < pos; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < mard; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }


    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("violet");
            }
            rect(x * side, y * side, side, side);

        }
        //յուրաքանչյուր խոտ փորձում է բազմանալ
        for (var i in grassArr) {
            grassArr[i].mul();
        }

        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
        for (var i in gishatichArr) {

            gishatichArr[i].eat();
        }
        for (var i in posArr) {
            posArr[i].eat();
        }
        for (var i in mardArr) {
            mardArr[i].eat();
        }

    }
}