

var render = function() {
    global.tick++;
    contexts.fg.clearRect(0, 0, global.w, global.h);

    if(global.loaded) {
        if(global.tick <= 200) {
            fgCtx.globalAlpha = parseFloat(global.tick)/100;
        } else {
            fgCtx.globalAlpha = 1;
        }

        switch(global.screen) {
            case "title":
                renderTitle();
                break;
            case "slide1":
                renderSlide1();
                break;
        }
    } else {
        renderLoading();
    }

    window.requestAnimationFrame(render);
}

var renderLoading = function() {
    fgCtx.drawImage(canvases.loading, 0, 0, global.w, global.h);
}

var renderTitle = function() {
    fgCtx.drawImage(canvases.title, 0, 0, global.w, global.h);
}

var renderSlide1 = function() {
    fgCtx.drawImage(canvases["slide1Title"], parseInt(global.w/2-400), 500);
    fgCtx.drawImage(canvases["slide1Word0"], parseInt(global.w/2-400), 100);
    for(var i = 1; i <= 2; i++) {
        fgCtx.drawImage(canvases["slide1Word" + i], 100, i*50+200);
    }
    for(var i = 3; i <= 4; i++) {
        fgCtx.drawImage(canvases["slide1Word" + i], 1200, i*50+100);
    }
    for(var i = 5; i <= 6; i++) {
        fgCtx.drawImage(canvases["slide1Word" + i], 1200, i*50+200);
    }
    for(var i = 7; i <= 9; i++) {
        fgCtx.drawImage(canvases["slide1Word" + i], 1200, i*50+300);
    }
    for(var i = 10; i <= 15; i++) {
        fgCtx.drawImage(canvases["slide1Word" + i], -50, i*50-50);
    }
    fgCtx.globalAlpha = global.tick-500/50;
}


load();
