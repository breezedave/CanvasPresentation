

var render = function() {
    global.tick++;
    contexts.fg.clearRect(0, 0, global.w, global.h);

    if(global.loaded) {
        if(global.tick <= 200) {
            fgCtx.globalAlpha = parseFloat(global.tick)/100;
        } else {
            fgCtx.globalAlpha = 1;
        }

        if(global.screen !== "slide2a" && eg1Loop) {
            clearTimeout(eg1Loop);
            eg1Loop = null;
            egCtx.clearRect(0, 0, global.w, global.h);
        }
        switch(global.screen) {
            case "title":
                egCtx.clearRect(0, 0, global.w, global.h);
                renderTitle();
                break;
            case "slide1":
                egCtx.clearRect(0, 0, global.w, global.h);
                renderSlide1();
                break;
            case "slide2":
                egCtx.clearRect(0, 0, global.w, global.h);
                renderSlide2();
                break;
            case "slide2a":
                global.tick = 200;
                renderSlide2();
                renderSlide2a();
                break;
            case "slide2b":
                global.tick = 200;
                renderSlide2();
                renderSlide2b();
                egCanvas();
                break;
            case "slide3":
                egCtx.clearRect(0, 0, global.w, global.h);
                renderSlide3();
                break;
            case "slide3a":
                global.tick = 200;
                renderSlide3();
                renderSlide3a();
                innerStrokeCanvas();
                break;
            case "slide3b":
                global.tick = 200;
                renderSlide3();
                renderSlide3b();
                outerStrokeCanvas(global.panelW, global.panelH);
                break;
            case "slide4":
                egCtx.clearRect(0, 0, global.w, global.h);
                renderSlide4();
                break;
            case "slide4a":
                global.tick = 200;
                renderSlide4();
                renderSlide4a();
                outerStrokeCanvas(500, 500);
                break;
            case "slide4b":
                global.tick = 200;
                renderSlide4();
                renderSlide4b();
                preRendered();
                break;
            case "slide5":
                egCtx.clearRect(0, 0, global.w, global.h);
                renderSlide5();
                break;
            case "slide5a":
                global.tick = 200;
                egCtx.clearRect(0, 0, global.w, global.h);
                renderSlide5();
                renderSlide5a();
                break;
            case "slide5b":
                global.tick = 200;
                egCtx.clearRect(0, 0, global.w, global.h);
                renderSlide5();
                renderSlide5a();
                renderSlide5b();
                break;
            case "slide5c":
                global.tick = 200;
                egCtx.clearRect(0, 0, global.w, global.h);
                renderSlide5();
                renderSlide5a();
                renderSlide5b();
                renderSlide5c();
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
    fgCtx.drawImage(canvases["slide1Title"], parseInt(global.w/2-600), 500);
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

var renderSlide2 = function() {
    fgCtx.drawImage(canvases["slide2Title"], parseInt(global.w/2-600), 100);
    fgCtx.drawImage(canvases["slide2Line0"], 100, 300);
    fgCtx.drawImage(canvases["slide2Line1"], 100, 400);
    fgCtx.drawImage(canvases["slide2Line2"], 100, 450);
    fgCtx.drawImage(canvases["slide2Line3"], 100, 550);
    fgCtx.drawImage(canvases["slide2Line4"], 100, 600);
    fgCtx.drawImage(canvases["slide2Line5"], 100, 650);
}

var renderSlide2a = function() {
    fgCtx.drawImage(canvases["slide2aLine0"], 300, 800);
    var eg = document.getElementById("eg");
    if(!eg) {
        document.body.appendChild(egCanv);
    }
    if(!eg1Loop) eg1Canvas();
}

var renderSlide2b = function() {
    fgCtx.drawImage(canvases["slide2bLine0"], 300, 800);
    var eg = document.getElementById("eg");
    if(!eg) {
        egCanvas();
    }
}

var renderSlide3 = function() {
    fgCtx.drawImage(canvases["slide3TitleA"], parseInt(global.w/2-600), 100);
    fgCtx.drawImage(canvases["slide3TitleB"], parseInt(global.w/2-600), 170);
    fgCtx.drawImage(canvases["slide3Line0"], 100, 300);
    fgCtx.drawImage(canvases["slide3Line1"], 100, 350);
    fgCtx.drawImage(canvases["slide3Line2"], 100, 500);
}

var renderSlide3a = function() {
    fgCtx.drawImage(canvases["slide3aLine0"], 100, 650);
    fgCtx.drawImage(canvases["slide3aLine1"], 100, 700);
}

var renderSlide3b = function() {
    fgCtx.drawImage(canvases["slide3bLine0"], 100, 650);
    fgCtx.drawImage(canvases["slide3bLine1"], 100, 700);
}

var renderSlide4 = function() {
    fgCtx.drawImage(canvases["slide4TitleA"], parseInt(global.w/2-600), 100);
    fgCtx.drawImage(canvases["slide4TitleB"], parseInt(global.w/2-600), 170);
    fgCtx.drawImage(canvases["slide4Line0"], 100, 300);
    fgCtx.drawImage(canvases["slide4Line1"], 100, 350);
    fgCtx.drawImage(canvases["slide4Line2"], 100, 400);
    fgCtx.drawImage(canvases["slide4Line3"], 100, 450);
    fgCtx.drawImage(canvases["slide4Line4"], 100, 600);
    fgCtx.drawImage(canvases["slide4Line5"], 100, 650);
}

var renderSlide4a = function() {
    fgCtx.drawImage(canvases["slide4aLine0"], 100, 800);
    fgCtx.drawImage(canvases["slide4aLine1"], 100, 850);
}

var renderSlide4b = function() {
    fgCtx.drawImage(canvases["slide4bLine0"], 100, 800);
    fgCtx.drawImage(canvases["slide4bLine1"], 100, 850);
}

var renderSlide5 = function() {
    fgCtx.drawImage(canvases["slide5Title"], parseInt(global.w/2-600), 100);
}

var renderSlide5a = function() {
    fgCtx.drawImage(canvases["slide5Line0"], 100, 240);
    fgCtx.drawImage(canvases["slide5Line1"], 100, 300);
    fgCtx.drawImage(canvases["slide5Line2"], 100, 350);
}

var renderSlide5b = function() {
    fgCtx.drawImage(canvases["slide5Line3"], 100, 490);
    fgCtx.drawImage(canvases["slide5Line4"], 100, 550);
    fgCtx.drawImage(canvases["slide5Line5"], 100, 600);
}

var renderSlide5c = function() {
    fgCtx.drawImage(canvases["slide5Line6"], 100, 740);
    fgCtx.drawImage(canvases["slide5Line7"], 100, 800);
    fgCtx.drawImage(canvases["slide5Line8"], 100, 850);
    fgCtx.drawImage(canvases["slide5Line9"], 100, 900);
}


load();
