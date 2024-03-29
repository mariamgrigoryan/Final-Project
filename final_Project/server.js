//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Mard = require("./modules/Mard.js");
var Pos = require("./modules/Pos.js");
var Gishatich = require("./modules/Gishatich.js");
var Hresh = require("./modules/Hresh.js");
let random = require('./modules/random');
//! Requiring modules  --  END

grassArr = [];
grassEaterArr = [];
mardArr = [];
posArr = [];
gishatichArr = [];
hreshArr = [];
matrix = [];



grassHashiv = 0;
grassEaterHashiv = 0;
mardHashiv = 0;
posHashiv = 0;
gishatichHashiv = 0;
hreshHashiv = 0;


function matrixGenerator(matrixSize, grass, grassEater, mard, pos, gishatich,hresh) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < mard; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < pos; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < hresh; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(30, 25, 20, 15, 10, 2, 1);
 


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var mard = new Mard(x, y);
                mardArr.push(mard);
                mardHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var pos = new Pos(x, y);
                posArr.push(pos);
                posHashiv++;
            }
            else if (matrix[y][x] == 5) {
                var gishatich= new Gishatich(x, y);
                gishatichArr.push(gishatich);
                gishatichHashiv++;
            }
            else if (matrix[y][x] == 6) {
                var hresh = new Hresh(x, y);
                hreshArr.push(hresh);
                hreshHashiv++;
            }
        }
    }

}

creatingObjects();
let exanak = 0
let weather = 0
function game() {
    exanak++;
    if (exanak <= 10){
        weather = "summer"
    }else if (exanak <= 20){
        weather = "autumn"
    }else if (exanak <= 30){
        weather = "winter";
    }
    else if (exanak <= 40){
        weather = "spring"
    }
    else if (exanak >= 50){
        exanak = 0;
    }


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (mardArr[0] !== undefined) {
        for (var i in mardArr) {
            mardArr[i].eat();
        }
    }
    if (posArr[0] !== undefined) {
        for (var i in posArr) {
            posArr[i].eat();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
        }
    }
    if (hreshArr[0] !== undefined) {
        for (var i in hreshArr) {
            hreshArr[i].eat();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,

        grassEaterCounter: grassEaterHashiv,
        grassEaterLiveCounter: grassEaterArr.length,

        mardCounter: mardHashiv,
        mardLiveCounter: mardArr.length,

        posCounter: posHashiv,
        posLiveCounter: posArr.length,

        gishatichCounter: gishatichHashiv,
        gishatichLiveCounter: gishatichArr.length,

        hreshCounter: hreshHashiv,
        hreshLiveCounter: hreshArr.length,

        weather: weather,
    }

   
    io.sockets.emit("data", sendData);
   
}



setInterval(game, 500)