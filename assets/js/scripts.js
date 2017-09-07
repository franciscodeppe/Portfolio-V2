var work = [{
        name: "Armet-Davis",
        source: "project1-web.png",
        type: "Web Application",
        id: "web"
    }, {
        name: "AtoZ",
        source: "project2-logo.gif",
        type: "Logo Design",
        id: "logo"
    }, {
        name: "Giphy",
        source: "project3-web.png",
        type: "Web Application",
        id: "web"
    },
    {
        name: "Hangman",
        source: "project4-web.png",
        type: "Web Application",
        id: "web"
    }, {
        name: "Social Models",
        source: "project5-logo.jpg",
        type: "Logo Design",
        id: "logo"
    }, {
        name: "The Latest",
        source: "project6-web.png",
        type: "Web Application",
        id: "web"
    }, {
        name: "Trivia Game",
        source: "project7-web.png",
        type: "Web Application",
        id: "web"
    }, {
        name: "Armet-Davis2",
        source: "project1-web.png",
        type: "Web Application",
        id: "web"
    }, {
        name: "AtoZ2",
        source: "project2-logo.gif",
        type: "Logo Design",
        id: "logo"
    }, {
        name: "Giphy2",
        source: "project3-web.png",
        type: "Web Application",
        id: "web"
    },
    {
        name: "Hangman2",
        source: "project4-web.png",
        type: "Web Application",
        id: "web"
    }, {
        name: "Social Models2",
        source: "project5-logo.jpg",
        type: "Logo Design",
        id: "logo"
    }, {
        name: "The Latest2",
        source: "project6-web.png",
        type: "Web Application",
        id: "web"
    }, {
        name: "Trivia Game2",
        source: "project7-web.png",
        type: "Web Application",
        id: "web"
    },
]

$(work).each(function (i) {

    var projectContainer =

        "<div class='" + this.id + " project-container'>" +
        "<div class='project-img'>" +
        "<img src='assets/media/" + this.source + "' alt=''>" +
        "</div>" +
        "<div class='project-info'>" +
        "<h3>" + this.name + "</h3>" +
        "<h4>" + this.type + "</h4>" +
        "</div>" +
        "</div>";
    $(".projects").append(projectContainer);

    return i < 6
});
$("#more").click(function () {
   
})
// Search through work  

$("#web-design-link").on("click", function () {
    $(".projects").children().each(function () {
        if ($(this).attr("class").search("web") === -1) {
            $(this).fadeOut(1000).hide(50)
        } else {
            $(this).fadeIn().show(1000)
        }
    })
});
$("#logo-design-link").on("click", function () {
    $(".projects").children().each(function () {
        if ($(this).attr("class").search("logo") === -1) {
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
});

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


})