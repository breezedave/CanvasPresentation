var buildBg = function() {
    canvases.bg = document.createElement('canvas');
    contexts.bg = canvases.bg.getContext("2d");
    canvases.fg = document.createElement('canvas');
    contexts.fg = canvases.fg.getContext("2d");

    var outerEdge = 50;
    var innerEdge = 150;
    var canv = canvases.bg;
    var ctx = contexts.bg;
    fgCanv = canvases.fg;
    fgCtx = contexts.fg;

    fgCanv.id = "fg";
    fgCanv.width = global.w;
    fgCanv.height = global.h;

    fgCanv.onclick = slideChanger;
    document.body.onkeydown = slideChangerByKey;

    canv.id = "bg";
    canv.width = global.w;
    canv.height = global.h;

    ctx.fillStyle = colors.BLACK;
    ctx.strokeStyle = colors.WHITE;
    ctx.lineWidth = 5;

    ctx.fillRect(0, 0, global.w, global.h);
    ctx.strokeRect(5, 5, global.w - 10, global.h - 10);

    ctx.beginPath();
    ctx.moveTo(outerEdge, innerEdge);
    ctx.lineTo(innerEdge, outerEdge);
    ctx.lineTo(global.w - innerEdge, outerEdge);
    ctx.lineTo(global.w - outerEdge, innerEdge);
    ctx.lineTo(global.w - outerEdge, global.h - innerEdge);
    ctx.lineTo(global.w - innerEdge, global.h - outerEdge);
    ctx.lineTo(innerEdge, global.h - outerEdge);
    ctx.lineTo(outerEdge, global.h - innerEdge);
    ctx.closePath();
    ctx.stroke();

    document.body.appendChild(canvases.bg);
    document.body.appendChild(canvases.fg);
}

var buildLoading = function() {
    canvases.loading = document.createElement("canvas");
    contexts.loading = canvases.loading.getContext("2d");
    var canv = canvases.loading;
    canv.width = global.w;
    canv.height = global.h;

    var ctx = contexts.loading;

    ctx.font="240px Plaster";
    ctx.textAlign="center";
    ctx.fillStyle = colors.WHITE;
    ctx.fillText("LOADING",parseInt(global.w/2),parseInt(global.h/2));

    contexts.fg.drawImage(canv, 0, 0, global.w, global.h);
}

var buildTitle = function(){
    canvases.title = document.createElement("canvas");
    contexts.title = canvases.title.getContext("2d");
    var canv = canvases.title;
    canv.width = global.w;
    canv.height = global.h;

    var ctx = contexts.title;

    ctx.font="120px Comfortaa";
    ctx.textAlign="center";
    ctx.fillStyle = colors.WHITE;
    ctx.fillText("WORKING WITH CANVAS", parseInt(global.w/2), parseInt(global.h/2));
    ctx.font="40px Comfortaa";
    ctx.fillText("EFFICIENCIES IN ANIMATION", parseInt(global.w/2), parseInt(global.h/2) + 50);
}

var makeFloorPanel = function() {
    canvases.floorPanel = document.createElement('canvas');
    contexts.floorPanel = canvases.floorPanel.getContext("2d");
    var ctx = contexts.floorPanel;
    var tl = [0, 0];
    var tr = [30, 0];
    var bl = [10, 20];
    var br = [40, 20];
    ctx.strokeStyle = colors.BLACK;
    ctx.fillStyle = colors.PURPLE;
    ctx.moveTo(tl[0], tl[1]);
    ctx.lineTo(tr[0], tr[1]);
    ctx.lineTo(br[0], br[1]);
    ctx.lineTo(bl[0], bl[1]);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

var makeMosaic = function() {
    canvases.mosaic = document.createElement('canvas');
    contexts.mosaic = canvases.mosaic.getContext("2d");
    canvases.mosaic.width = 5000;
    canvases.mosaic.height = 3500;
    var ctx = contexts.mosaic;
    ctx.fillStyle = colors.AQUA;
    ctx.fillRect(100, 100, 100, 100);
    for(var y=0; y<500; y++) {
        for(var x=0; x<500; x++) {
            ctx.drawImage(canvases.floorPanel, x*20, y*10);
        }
    }
}

var buildWord = function(name, word, color, size, width, align) {
    canvases[name] = document.createElement("canvas");
    contexts[name] = canvases[name].getContext("2d");
    var canv = canvases[name];
    var ctx = contexts[name];

    canv.width = width;
    ctx.textAlign = align;
    ctx.font=size + "px Comfortaa";
    ctx.fillStyle = color;
    ctx.fillText(word, (align=="center"?width/2:0), size);
}

var buildAllWords = function() {
    buildWord("slide1Title", "USED IN THIS DEMO", colors.WHITE, 80, 1200, "center");
    buildWord("slide1Word0", "window.requestAnimationFrame", colors.PURPLE, 40, 800, "center");
    buildWord("slide1Word1", "var canvas = createElement('canvas')", colors.ORANGE, 40, 800, "center");
    buildWord("slide1Word2", "var ctx = canvas.getContext('2d')", colors.ORANGE, 40, 800, "center");
    buildWord("slide1Word3", "ctx.fillStyle", colors.AQUA, 40, 800, "center");
    buildWord("slide1Word4", "ctx.strokeStyle", colors.AQUA, 40, 800, "center");
    buildWord("slide1Word5", "ctx.font", colors.BLUE, 40, 800, "center");
    buildWord("slide1Word6", "ctx.fillText", colors.BLUE, 40, 800, "center");
    buildWord("slide1Word7", "ctx.clearRect", colors.GREEN, 40, 800, "center");
    buildWord("slide1Word8", "ctx.fillRect", colors.GREEN, 40, 800, "center");
    buildWord("slide1Word9", "ctx.strokeRect", colors.GREEN, 40, 800, "center");
    buildWord("slide1Word10", "ctx.beginPath", colors.RED, 40, 800, "center");
    buildWord("slide1Word11", "ctx.moveTo", colors.RED, 40, 800, "center");
    buildWord("slide1Word12", "ctx.lineTo", colors.RED, 40, 800, "center");
    buildWord("slide1Word13", "ctx.closePath", colors.RED, 40, 800, "center");
    buildWord("slide1Word14", "ctx.fill", colors.RED, 40, 800, "center");
    buildWord("slide1Word15", "ctx.stroke", colors.RED, 40, 800, "center");
    buildWord("slide1Word16", "ctx.drawImage", colors.SALMON, 40, 800, "center");

    buildWord("slide2Title", "REQUESTING A FRAME", colors.WHITE, 60, 1200, "center");
    buildWord("slide2Line0", "Using window.requestAnimationFrame", colors.WHITE, 40, 1200, "left");
    buildWord("slide2Line1", "It calls the rendering function every time", colors.WHITE, 40, 1200, "left");
    buildWord("slide2Line2", "the browser is ready to render", colors.WHITE, 40, 1200, "left");

    buildWord("slide2Line3", "It works like a recursive setInterval call", colors.WHITE, 40, 1200, "left");
    buildWord("slide2Line4", "but more efficiently and", colors.WHITE, 40, 1200, "left");
    buildWord("slide2Line5", "without unnecessary reflows", colors.WHITE, 40, 1200, "left");

    buildWord("slide2aLine0", "USING TIMEOUT", colors.PURPLE, 80, 1200, "left");
    buildWord("slide2bLine0", "USING REQUEST", colors.PURPLE, 80, 1200, "left");

    buildWord("slide3TitleA", "REDUCING FILLS, STROKES", colors.WHITE, 60, 1200, "center");
    buildWord("slide3TitleB", "BEGIN & END PATHS", colors.WHITE, 60, 1200, "center");

    buildWord("slide3Line0", "Every begin path, end path, fill & stroke", colors.WHITE, 40, 1200, "left");
    buildWord("slide3Line1", "costs rendering time.", colors.WHITE, 40, 1200, "left");

    buildWord("slide3Line2", "In this example we have 1,600 shapes", colors.WHITE, 40, 1200, "left");

    buildWord("slide3aLine0", "I've created a version", colors.WHITE, 40, 1200, "left");
    buildWord("slide3aLine1", "filling/stroking for every shape", colors.WHITE, 40, 1200, "left");

    buildWord("slide3bLine0", "And a version where we beginPath,", colors.WHITE, 40, 1200, "left");
    buildWord("slide3bLine1", "endPath, fill and stroke just once", colors.WHITE, 40, 1200, "left");

    buildWord("slide4TitleA", "MULTIPLE CANVASES", colors.WHITE, 60, 1200, "center");
    buildWord("slide4TitleB", "& PRE-RENDERING", colors.WHITE, 60, 1200, "center");

    buildWord("slide4Line0", "If you have content that doesn't change", colors.WHITE, 40, 1200, "left");
    buildWord("slide4Line1", "you can pre-render it to another canvas", colors.WHITE, 40, 1200, "left");
    buildWord("slide4Line2", "and draw that canvas' content", colors.WHITE, 40, 1200, "left");
    buildWord("slide4Line3", "on to your canvas instead", colors.WHITE, 40, 1200, "left");

    buildWord("slide4Line4", "I've changed the example to use ", colors.WHITE, 40, 1200, "left");
    buildWord("slide4Line5", "250,000 shapes", colors.WHITE, 40, 1200, "left");

    buildWord("slide4aLine0", "I've created a version", colors.WHITE, 40, 1200, "left");
    buildWord("slide4aLine1", "using the previous method", colors.WHITE, 40, 1200, "left");

    buildWord("slide4bLine0", "And a version", colors.WHITE, 40, 1200, "left");
    buildWord("slide4bLine1", "using a pre-rendered canvas", colors.WHITE, 40, 1200, "left");

    buildWord("slide5Title", "OTHER TECHNIQUES", colors.WHITE, 60, 1200, "center");

    buildWord("slide5Line0", "CHANGE STYLES LESS:", colors.WHITE, 50, 1200, "left");
    buildWord("slide5Line1", "Every style change costs rendering time", colors.WHITE, 40, 1200, "left");
    buildWord("slide5Line2", "Try rendering all objects of one color before moving to another", colors.WHITE, 40, 1400, "left");

    buildWord("slide5Line3", "USE INTEGERS:", colors.WHITE, 50, 1200, "left");
    buildWord("slide5Line4", "Rendering a float means the canvas", colors.WHITE, 40, 1200, "left");
    buildWord("slide5Line5", "has to use anti-aliasing which costs rendering time", colors.WHITE, 40, 1200, "left");

    buildWord("slide5Line6", "LAYER CANVASES:", colors.WHITE, 50, 1200, "left");
    buildWord("slide5Line7", "If you have a truly static background layer", colors.WHITE, 40, 1200, "left");
    buildWord("slide5Line8", "you can draw it once and layer another canvas on top", colors.WHITE, 40, 1200, "left");
    buildWord("slide5Line9", "This demo has used 3 layers", colors.WHITE, 40, 1200, "left");

}
