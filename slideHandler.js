
var slideChanger = function(evt) {
    var left =  document.body.clientWidth/4;
    var right = document.body.clientWidth/4*3;
    if(evt.clientX <= left) getSlide(-1);
    if(evt.clientX >= right) getSlide(1);
}

var slideChangerByKey = function(evt) {
    switch(evt.keyCode) {
        case 37:
        case 38:
            getSlide(-1);
            break;
        case 39:
        case 40:
            getSlide(1);
            break;
    };
}

var getSlide = function(direction) {
    var slideNum = -1
    for(var i=0; i < screenNames.length; i++) {
        if(screenNames[i] == global.screen) slideNum = i;
    }
    slideNum += direction;
    if(slideNum>=0 && slideNum < screenNames.length) {
        global.screen = screenNames[slideNum];
        global.tick = 0;
    }
    egX=0;
    global.frameRate = false;
}
