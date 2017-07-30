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

var buildWord = function(name, word, color, size) {
    canvases[name] = document.createElement("canvas");
    contexts[name] = canvases[name].getContext("2d");
    var canv = canvases[name];
    var ctx = contexts[name];

    canv.width = 800;
    ctx.textAlign = "center";
    ctx.font=size + "px Comfortaa";
    ctx.fillStyle = color;
    ctx.fillText(word, 400, size);
}

var buildAllWords = function() {
    buildWord("slide1Title", "WHAT WE'LL USE", colors.WHITE, 80);
    buildWord("slide1Word0", "window.requestAnimationFrame", colors.PURPLE, 40);
    buildWord("slide1Word1", "var canvas = createElement('canvas')", colors.ORANGE, 40);
    buildWord("slide1Word2", "var ctx = canvas.getContext('2d')", colors.ORANGE, 40);
    buildWord("slide1Word3", "ctx.fillStyle", colors.AQUA, 40);
    buildWord("slide1Word4", "ctx.strokeStyle", colors.AQUA, 40);
    buildWord("slide1Word5", "ctx.font", colors.BLUE, 40);
    buildWord("slide1Word6", "ctx.fillText", colors.BLUE, 40);
    buildWord("slide1Word7", "ctx.clearRect", colors.GREEN, 40);
    buildWord("slide1Word8", "ctx.fillRect", colors.GREEN, 40);
    buildWord("slide1Word9", "ctx.strokeRect", colors.GREEN, 40);
    buildWord("slide1Word10", "ctx.beginPath", colors.RED, 40);
    buildWord("slide1Word11", "ctx.moveTo", colors.RED, 40);
    buildWord("slide1Word12", "ctx.lineTo", colors.RED, 40);
    buildWord("slide1Word13", "ctx.closePath", colors.RED, 40);
    buildWord("slide1Word14", "ctx.fill", colors.RED, 40);
    buildWord("slide1Word15", "ctx.stroke", colors.RED, 40);
    buildWord("slide1Word16", "ctx.drawImage", colors.SALMON, 40);
}
