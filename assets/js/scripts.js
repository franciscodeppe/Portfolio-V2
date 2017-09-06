$(document).ready(function () {

    // page transitions

    $(".right-column").css("display", "none");
    $(".right-column").fadeIn(1500);


    $("#about-link").click(function (event) {
        $(".about").animate({
            "margin-left": "0px",
            
        }, 500)
        $(".about").css("overflow", "visible")
    });

    $("#back").click(function (event) {
        $(".about").animate({
            "margin-left": "100vw",
        }, 500)
        $(".about").css("overflow", "hidden")
    });



    // Nav hover - underline

    $(".nav>a").mouseenter(function () {
        $(this).children("hr").animate({
            "width": "90%"
        }, 50)
    });
    $(".nav>a").mouseleave(function () {
        $(this).children("hr").animate({
            "width": "0px"
        }, 5)
    });

    // Search through work  

    $("#web-design-link").on("click", function () {
        $(".projects").children().each(function () {
            if ($(this).attr("class").search("web-design") === -1) {
                $(this).fadeOut(1000).hide(50)
            } else {
                $(this).fadeIn().show(1000)
            }
        })
    });
    $("#logo-design-link").on("click", function () {
        $(".projects").children().each(function () {
            if ($(this).attr("class").search("logo-design") === -1) {
                $(this).fadeOut(1000).hide(50)
            } else {
                $(this).fadeIn().show(1000)
            }
        })
    });
    $("#creative-link").on("click", function () {
        $(".projects").children().each(function () {
            if ($(this).attr("class").search("creative") === -1) {
                $(this).fadeOut(1000).hide(50)
            } else {
                $(this).fadeIn().show(1000)
            }
        })
    });
    $("#all-portfolio-link").on("click", function () {
        $(".projects").children().each(function () {
            if ($(this).attr("class").search("project-container") !== -1) {
                $(this).show(1000)
            }
        })
    })
})