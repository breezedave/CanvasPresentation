

var render = function() {
    global.tick++;
    contexts.fg.clearRect(0, 0, global.w, global.h);


    if(global.tick <= 200) {
        fgCtx.globalAlpha = parseFloat(global.tick)/100;
    } else {
        fgCtx.globalAlpha = 1;
    }

    switch(global.screen) {
        case "title":
            fgCtx.drawImage(canvases.title, 0, 0, global.w, global.h);
            break;
        case "slide1":
            fgCtx.fillStyle = "RGBA(50, 50, 50, 1)";
            fgCtx.fillRect(100, 100, 200, 200);
            break;
        case "slide2":
            fgCtx.fillStyle = "RGBA(150, 150, 150, 1)";
            fgCtx.fillRect(150, 150, 200, 200);
            break;
        case "slide3":
            fgCtx.fillStyle = "RGBA(250, 150, 150, 1)";
            fgCtx.fillRect(450, 450, 200, 200);
            break;

    }

    window.requestAnimationFrame(render);
}

load();
