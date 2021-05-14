let xPressed = false;
let mouseHeld = false;
let mouseEntered = false;
const states = ["still", "ready", "throwing", "cool"];

function playHadouken() {
    $("#hadouken-sound")[0].volume = 0.5;
    $("#hadouken-sound")[0].load();
    $("#hadouken-sound")[0].play();
}

function setState(state) {
    states.forEach(function(s) {
        const element = $(".ryu-" + s);
        state == s ? element.show() : element.hide();
    });
} 

$(document).ready(function() {

    $("body").keydown(function(event) {
        console.log("x pressed");
        if (event.which == "88" && !mouseHeld) {
            xPressed = true;
            setState("cool");
        }  
    })
    .keyup(function(event) {
        console.log("x released");
        if (event.which == "88" && !mouseHeld) {
            xPressed = false;
            setState(mouseEntered ? "ready" : "still");
        }
    })
    $(".ryu").mousedown(function() {
        if (!xPressed) {
            mouseHeld = true;
            playHadouken();
            console.log("mousedown");
            setState("throwing");
            $(".hadouken").finish().show().animate({"left":"1250px"}, 500, function() {
                    $(".hadouken").hide();
                    $(".hadouken").css("left", "550px");
                }
            )
        }    
    })
    .mouseup(function() {
        if (!xPressed) {
            mouseHeld = false;
            console.log("mouseup");
            setState("ready");
        }    
    })
    .mouseenter(function() {
        mouseEntered = true;
        console.log("mouseenter");
        if (!xPressed) {
            setState("ready");
        }     
    })
    .mouseleave(function() {
        console.log("mouseleave");
        mouseEntered = false;
        if (!xPressed) {
            mouseHeld = false;
           setState("still");
        }    
    })
});