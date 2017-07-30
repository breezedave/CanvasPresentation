var fgCanv;
var fgContext;

var global = {
    w: 1920
    , h: 1080
    , loaded: false
    , screen: "title"
    , tick: 0
    , panelW: 40
    , panelH: 40
}

var screenNames = [
    "title"
    , "slide2"
    , "slide2a"
    , "slide2b"
    , "slide3"
    , "slide3a"
    , "slide3b"
    , "slide4"
    , "slide4a"
    , "slide4b"
    , "slide5"
    , "slide5a"
    , "slide5b"
    , "slide5c"
    , "slide1"
]

var canvases = {}

var contexts = {}

var builders = {
    "Loading Title": buildTitle
    , "Building Words": buildAllWords
    , "Floor Panel": makeFloorPanel
    , "Mosaic": makeMosaic
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
