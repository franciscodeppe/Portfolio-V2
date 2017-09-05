// Cube ------------------------


var main = function () {
    $(".cube").mousedown(function () {
        $(document).mousemove(function (e) {
            $(".cube").css(
                "transform",
                "rotateX(" + -e.pageY + "deg)" + "rotateY(" + e.pageX + "deg)"

            );
            // console.log(-e.pageY)
            // console.log(e.pageX)
        });
        $(document).on("click", function () {
            $(document).off("mousemove");
        });
    });
};
$(document).ready(main);

var Cube =
    '<div class="Cube visible f cube-n">' +
    '<div class="front-n visible faces-n"></div>' +
    '<div class="back-n faces-n"></div>' +
    '<div class=" top-n faces-n"></div>' +
    '<div class=" bottom-n faces-n visible"></div>' +
    '<div class="left-n faces-n"></div>' +
    '<div class="right-n faces-n"></div>' +
    "</div>";

$(".top").append(Cube);
$(".bottom").append(Cube);
$(".Cube").css({
    left: "33%",
    top: "33%"
});

for (var i = 0; i < 6; i++) {
    var id = i;

    var newCube =
        '<div class="' +
        id +
        ' cube-n">' +
        '<div class="f front-n faces-n"></div>' +
        '<div class="t top-n faces-n"></div>' +
        '<div class="bottom-n faces-n"></div>' +
        '<div class="left-n faces-n"></div>' +
        '<div class="right-n faces-n"></div>' +
        "</div>";

    $(".front,.left,.right,.back").append(newCube);

    switch (id) {
        case 0:
            $("." + id).addClass(" visible l f t");
            $("." + id).css({});
            break;
        case 1:
            $("." + id).css({
                left: "33%"
            });
            $("." + id).addClass(" visible t f");
            break;
        case 2:
            $("." + id).css({
                top: "33%"
            });
            $("." + id).addClass(" visible l f");
            break;
        case 3:
            $("." + id).css({
                left: "33%",
                top: "33%"
            });
            $("." + id).addClass(" visible f");
            break;
        case 4:
            $("." + id).css({
                top: "66%"
            });
            $("." + id).addClass(" visible l f b");
            break;
        case 5:
            $("." + id).css({
                top: "66%",
                left: "33%"
            });
            $("." + id).addClass(" visible b f");
            break;
    }
}

function uniqueID() {
    var n = 0;
    var id = "face";

    $(".f >.front-n").each(function () {
        // console.log("test")
        $(this).attr("id", id + n);

        n++;
        // console.log($(this).attr("id") + "front")
        // console.log(n);
    });
    $(".l >.left-n").each(function () {
        $(this).attr("id", id + n);
        n++;
        // console.log($(this).attr("id") + "left")
    });
    $(".t > .top-n").each(function () {
        $(this).attr("id", id + n);
        n++;

    });
    $(".b > .bottom-n").each(function () {
        $(this).attr("id", id + n);
        n++;
        // console.log(n)
    });


}
uniqueID();

function addColor() {
    var cubeColors = ["red", "green", "blue", "orange", "white", "yellow"];
    var red = 0;
    var blue = 0;
    var green = 0;
    var yellow = 0;
    var white = 0;
    var orange = 0;
    var color;



    for (var i = 0; i < 55; i++) {

        var rand = Math.floor(Math.random() * cubeColors.length)

        color = cubeColors[rand]

        // console.log(color)

        if (red === 9) {
            // console.log("red");
            var here = cubeColors.indexOf("red");
            cubeColors.splice(here, 1);
            red = -1
        }
        if (green === 9) {
            // console.log("green");
            var here = cubeColors.indexOf("green");
            cubeColors.splice(here, 1);
            green = -1
        }
        if (blue === 9) {
            // console.log("blue");
            var here = cubeColors.indexOf("blue");
            cubeColors.splice(here, 1);
            blue = -1
        }
        if (orange === 9) {
            // console.log("orange");
            var here = cubeColors.indexOf("orange");
            cubeColors.splice(here, 1);
            orange = -1
        }
        if (yellow === 9) {
            // console.log("yellow");
            var here = cubeColors.indexOf("yellow");
            cubeColors.splice(here, 1);
            yellow = -1
        }
        if (white === 9) {
            // console.log("white");
            var here = cubeColors.indexOf("white");
            cubeColors.splice(here, 1);
            white = -1
        }

        switch (color) {
            case "red":
                red++;
                // console.log(red)
                break;
            case "green":
                green++;
                // console.log(green)
                break;
            case "blue":
                blue++;
                // console.log(blue)
                break;
            case "orange":
                orange++;
                // console.log(orange)
                break;
            case "white":
                white++;
                // console.log(white)
                break;
            case "yellow":
                yellow++;
                // console.log(yellow)
                break;
        }


        $("#face" + i).css("background-color", color);
    }
}
addColor();

function cubeID() {
    var n = 0;
    var id = "parent";
    $('.cube-n').each(function () {

        $(this).attr("id", id + n);
        n++;

    });
}
cubeID()

$(".cube-n").each(function (n) {
    // console.log($(this).attr("id"))
});

function animations() {




}