$(document).ready(function() {
    x = false;
    function playHadouken() {
        $("#hadouken-sound")[0].volume = 0.5;
        $("#hadouken-sound")[0].load();
        $("#hadouken-sound")[0].play();
    }

    $(".ryu").mouseenter(function() {
        $(".ryu-still").hide();
        $(".ryu-ready").show();
        
    })

    $(".ryu").mouseleave(function() {
        $(".ryu-ready").hide();
        $(".ryu-still").show();
        $(".ryu-cool").hide();
    })
    $("body").keydown(function(event) {
        if (event.which == "88") {
            x = true;
            $(".ryu-still").hide();
            $(".ryu-cool").show();
            $(".ryu-ready").hide();
        }
        
    })
    $("body").keyup(function(event) {
        if (event.which == "88") {
            x = false;
            $(".ryu-cool").hide();
            $(".ryu-ready").show();    
        }
    })
    .mousedown(function() {
        if (!x) {
            playHadouken();
            console.log("mousedown");
            $(".ryu-ready").hide();
            $(".ryu-cool").hide();
            $(".ryu-throwing").show();
            $(".hadouken").finish().show()
            .animate (
                {"left":"1250px"},
                500,
                function() {
                    $(".ryu-cool").hide();
                    $(".hadouken").hide();
                    $(".hadouken").css("left", "550px");
                }
            )
        }    
    })
    .mouseup(function() {
        console.log("mouseup");
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
        $(".ryu-cool").hide();
    })

});