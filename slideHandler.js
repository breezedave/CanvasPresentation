
var slideChanger = function(evt) {
    var left =  document.body.clientWidth/4;
    var right = document.body.clientWidth/4*3;
    if(evt.clientX <= left) getSlide(-1);
    if(evt.clientX >= right) getSlide(1);
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
}
