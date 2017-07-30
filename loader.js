var fgCanv;
var fgContext;

var global = {
    w: 1920
    , h: 1080
    , loaded: false
    , screen: "title"
    , tick: 0
}

var screenNames = [
    "title"
    , "slide1"
    , "slide2"
    , "slide3"
]

var canvases = {}

var contexts = {}

var builders = {
    "Loading Title": buildTitle
    , "Building Words": buildAllWords
}

var load = function() {
    buildBg();
    buildLoading();
    render();
    for(i in builders) builders[i]();
    setTimeout(function() {
        global.loaded = true;
    }, 500);
}
