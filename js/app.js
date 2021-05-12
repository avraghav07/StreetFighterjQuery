$(document).ready(function() {
    function playHadouken() {
        $("#hadouken-sound")[0].volume = 0.5;
        $("#hadouken-sound")[0].load();
        $("#hadouken-sound")[0].play();
    }

    $(".ryu").keydown(function(event) {
        if (event.which == "88") {
            $(".ryu-still").hide();
            $(".ryu-cool").show();
        }    
    })

    $(".ryu").mouseenter(function() {
        $(".ryu-still").hide();
        $(".ryu-ready").show();
    })

    $(".ryu").mouseleave(function() {
        $(".ryu-ready").hide();
        $(".ryu-still").show();
    })

    .mousedown(function() {
        playHadouken();
        console.log("mousedown");
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".hadouken").finish().show()
        .animate (
            {"left":"1250px"},
            500,
            function() {
                $(".hadouken").hide();
                $(".hadouken").css("left", "520px");
            }
        )
    })

    .moouseup(function() {
        console.log("mouseup");
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
    })
});