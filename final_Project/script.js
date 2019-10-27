function setup() {
    var socket = io();
    var side = 15;
    var matrix = [];
    
    //! Getting DOM objects (HTML elements)
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');

    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');

    let mardCountElement = document.getElementById('mardCount');
    let mardLiveCountElement = document.getElementById('mardLiveCount');

    let posCountElement = document.getElementById('posCount');
    let posLiveCountElement = document.getElementById('posLiveCount');

    let gishatichCountElement = document.getElementById('gishatichCount');
    let gishatichLiveCountElement = document.getElementById('gishatichLiveCount');

    let hreshCountElement = document.getElementById('hreshCount');
    let hreshLiveCountElement = document.getElementById('hreshLiveCount');
    
    socket.on("data", drawCreatures);
   
    function drawCreatures(data) {
       
        matrix = data.matrix;
        weatherElement.innerText = data.weather;

        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;
        
        mardCountElement.innerText = data.mardCounter;
        mardLiveCountElement.innerText = data.mardLiveCounter;

        posCountElement.innerText = data.posCounter;
        posLiveCountElement.innerText = data.posLiveCounter;

        gishatichCountElement.innerText = data.gishatichCounter;
        gishatichLiveCountElement.innerText = data.gishatichLiveCounter;

        hreshCountElement.innerText = data.hreshCounter;
        hreshLiveCountElement.innerText = data.hreshLiveCounter;

        
        
        
        
       

   
        createCanvas(matrix[0].length * side, matrix.length * side)
       
        background('#acacac');
       
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 2) {
                    if(data.weather == "summer"){
                        fill("rgb(247, 51, 20)");//karmir//
                    }else if (data.weather == "autumn"){
                        fill("rgb(255, 41, 8)");
                    }else if (data.weather == "winter"){
                        fill("rgb(184, 29, 6)");
                    }
                    else if (data.weather == "spring"){
                        fill("rgb(247, 87, 62)");
                    }
                } else if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("rgb(88, 173, 3)");//kanach//
                    }else if (data.weather == "autumn"){
                        fill("rgb(120, 232, 7)");
                    }else if (data.weather == "winter"){
                        fill("rgb(168, 252, 83)");
                    }
                    else if (data.weather == "spring"){
                        fill("rgb(68, 133, 3)");
                    }
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if(data.weather == "summer"){
                        fill("rgb(235, 9, 222)");//manushakaguyn//
                    }else if (data.weather == "autumn"){
                        fill("rgb(184, 9, 174)");
                    }else if (data.weather == "winter"){
                        fill("rgb(128, 0, 121)");
                    }
                    else if (data.weather == "spring"){
                        fill("rgb(245, 86, 236)");
                    }
                } else if (matrix[i][j] == 4) {
                    if(data.weather == "summer"){
                        fill("rgb(0, 95, 250)");//kapuyt//
                    }else if (data.weather == "autumn"){
                        fill("rgb(2, 80, 207)");
                    }else if (data.weather == "winter"){
                        fill("rgb(4, 59, 148)");
                    }
                    else if (data.weather == "spring"){
                        fill("rgb(82, 144, 242)");
                    }
                } else if (matrix[i][j] == 5) {
                    if(data.weather == "summer"){
                        fill("rgb(225, 250, 10)");//dexin//
                    }else if (data.weather == "autumn"){
                        fill("rgb(190, 212, 0)");
                    }else if (data.weather == "winter"){
                        fill("rgb(174, 194, 0)");
                    }
                    else if (data.weather == "spring"){
                        fill("rgb(218, 240, 36)");
                    }
                }
                else if (matrix[i][j] == 6) {
                    if(data.weather == "summer"){
                        fill("rgb(247, 2, 113)");//vardaguyn//
                    }else if (data.weather == "autumn"){
                        fill("rgb(196, 6, 92)");
                    }else if (data.weather == "winter"){
                        fill("rgb(171, 3, 79)");
                    }
                    else if (data.weather == "spring"){
                        fill("rgb(102, 0, 102)");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}
