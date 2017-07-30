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

var canvases = {
    bg: null
    , loading: null
    , title: null
    , page1: null
}

var contexts = {
    bg: null
    , loading: null
    , title: null
    , page1: null
}

var builders = {
    "Loading Background": buildBg
    , "Loading Screen": buildLoading
    , "Loading Title": buildTitle
}

var load = function() {
    for(i in builders) builders[i]();
    render();
}
