var egCanv = document.createElement("canvas");
egCanv.id = "eg";
egCanv.width = global.w;
egCanv.height = global.h;
var egCtx  = egCanv.getContext("2d");
var egX = 0;
var eg1Loop;

var eg1Canvas = function() {
    egCanvas();
    eg1Loop = setTimeout(eg1Canvas, 0);
}

var egCanvas = function() {
    egCtx.clearRect(0, 0, global.w, global.h);
    egCtx.lineWidth = 4;
    egCtx.strokeStyle = colors.WHITE;
    egCtx.fillStyle = colors.WHITE;

    for(var y=0; y < global.panelW; y++) {
        for(var x=0; x < global.panelH; x++) {
            egCtx.drawImage(canvases.floorPanel, 950 + egX%80 + (x*20), 510 + (y*10));
        }
    }

    egCtx.clearRect(0, 0, 1920, 510);
    egCtx.clearRect(0, 890, 1920, 190);
    egCtx.clearRect(0, 0, 1050, 1080);
    egCtx.clearRect(1710, 0, 270, 1080);
    egCtx.strokeRect(1052, 512, 656, 376);
    egCtx.font = "30px Comfortaa";
    if(egX%50 == 10) global.frameRate = 1000/ (global.currTime - global.prevTime);
    if(global.frameRate) {
        egCtx.fillText("FPS " + Math.ceil(global.frameRate), 1600, 930);
    }
    global.prevTime = global.currTime;
    global.currTime = new Date();
    egX = (egX+1)%80;
}

var innerStrokeCanvas = function() {
    egCtx.clearRect(0, 0, global.w, global.h);
    var ctx = egCtx;

    ctx.lineWidth = 1;
    ctx.strokeStyle = colors.BLACK;
    ctx.fillStyle = colors.PURPLE;
    var tl = [0, 0];
    var tr = [20, 0];
    var bl = [5, 10];
    var br = [25, 10];
    for(var y=0; y < global.panelW; y++) {
        for(var x=0; x < global.panelH; x++) {
            ctx.beginPath();
            ctx.moveTo(tl[0] + 950 + egX%80 + (x*20), tl[1] + 510 + (y*10));
            ctx.lineTo(tr[0] + 950 + egX%80 + (x*20), tr[1] + 510 + (y*10));
            ctx.lineTo(br[0] + 950 + egX%80 + (x*20), br[1] + 510 + (y*10));
            ctx.lineTo(bl[0] + 950 + egX%80 + (x*20), bl[1] + 510 + (y*10));
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }

    egCtx.lineWidth = 4;
    egCtx.strokeStyle = colors.WHITE;
    egCtx.fillStyle = colors.WHITE;
    egCtx.clearRect(0, 0, 1920, 510);
    egCtx.clearRect(0, 890, 1920, 190);
    egCtx.clearRect(0, 0, 1050, 1080);
    egCtx.clearRect(1710, 0, 270, 1080);
    egCtx.strokeRect(1052, 512, 656, 376);
    egCtx.font = "30px Comfortaa";
    if(egX%50 == 10) global.frameRate = 1000/ (global.currTime - global.prevTime);
    if(global.frameRate) {
        egCtx.fillText("FPS " + Math.ceil(global.frameRate), 1600, 930);
    }
    global.prevTime = global.currTime;
    global.currTime = new Date();
    egX = (egX+1)%80;
}

var outerStrokeCanvas = function(panelW, panelH) {
    egCtx.clearRect(0, 0, global.w, global.h);
    var ctx = egCtx;

    ctx.lineWidth = 1;
    ctx.strokeStyle = colors.BLACK;
    ctx.fillStyle = colors.PURPLE;
    var tl = [0, 0];
    var tr = [20, 0];
    var bl = [5, 10];
    var br = [25, 10];
    ctx.beginPath();
    for(var y=0; y < panelW; y++) {
        for(var x=0; x < panelH; x++) {
            ctx.moveTo(tl[0] + 950 + egX%80 + (x*20), tl[1] + 510 + (y*10));
            ctx.lineTo(tr[0] + 950 + egX%80 + (x*20), tr[1] + 510 + (y*10));
            ctx.lineTo(br[0] + 950 + egX%80 + (x*20), br[1] + 510 + (y*10));
            ctx.lineTo(bl[0] + 950 + egX%80 + (x*20), bl[1] + 510 + (y*10));
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    egCtx.lineWidth = 4;
    egCtx.strokeStyle = colors.WHITE;
    egCtx.fillStyle = colors.WHITE;
    egCtx.clearRect(0, 0, 1920, 510);
    egCtx.clearRect(0, 890, 1920, 190);
    egCtx.clearRect(0, 0, 1050, 1080);
    egCtx.clearRect(1710, 0, 270, 1080);
    egCtx.strokeRect(1052, 512, 656, 376);
    egCtx.font = "30px Comfortaa";
    if(egX%50 == 10) global.frameRate = 1000/ (global.currTime - global.prevTime);
    if(global.frameRate) {
        egCtx.fillText("FPS " + Math.ceil(global.frameRate), 1600, 930);
    }
    global.prevTime = global.currTime;
    global.currTime = new Date();
    egX = (egX+1)%80;
}

var preRendered = function() {
    egCtx.clearRect(0, 0, global.w, global.h);
    var ctx = egCtx;

    egCtx.drawImage(canvases.mosaic, 950 + egX%80, 510);

    egCtx.lineWidth = 4;
    egCtx.strokeStyle = colors.WHITE;
    egCtx.fillStyle = colors.WHITE;
    egCtx.clearRect(0, 0, 1920, 510);
    egCtx.clearRect(0, 890, 1920, 190);
    egCtx.clearRect(0, 0, 1050, 1080);
    egCtx.clearRect(1710, 0, 270, 1080);
    egCtx.strokeRect(1052, 512, 656, 376);
    egCtx.font = "30px Comfortaa";
    if(egX%50 == 10) global.frameRate = 1000/ (global.currTime - global.prevTime);
    if(global.frameRate) {
        egCtx.fillText("FPS " + Math.ceil(global.frameRate), 1600, 930);
    }
    global.prevTime = global.currTime;
    global.currTime = new Date();
    egX = (egX+1)%80;
}
