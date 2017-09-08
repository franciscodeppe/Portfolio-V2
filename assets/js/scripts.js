var $grid = $('.grid').masonry({
    columnWidth: 50,
    horizontalOrder: true,
});


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

function projectPopulate(i) {
    var projectContainer = "<div class='item " + work[i].id + "'>" +
        "<div class='project-img'>" +
        "<img src='assets/media/" + work[i].source + "' alt=''>" +
        "</div>" +
        "<a href='#'><div class='more-info'><h3>More Info</h3>" +
        "</div></a>" +
        "<div class='project-info'>" +
        "<h3>" + work[i].name + "</h3>" +
        "<h4>" + work[i].type + "</h4>" +
        "</div>" +
        "</div>";
    $grid.masonry('layout');
    $grid.append(projectContainer);

}

$(work).each(function (i) {
    projectPopulate(i)
});


// Search through work ----------------------
$(document).ready(function (event) {
    
    $("#web-design-link").on("click", function () {
        // remove current items
        $(".grid").fadeOut(500, function () {
            $(".grid").html("");

            $(work).each(function (i) {
                if (this.id === "web") {
                    projectPopulate(i)

                }
            })
        })
        $(".grid").fadeIn(300)

    });
    $("#logo-design-link").on("click", function () {
        $(".grid").fadeOut(500, function () {
            $(".grid").html("");

            $(work).each(function (i) {
                if (this.id === "logo") {
                    projectPopulate(i)

                }
            })
        })
        $(".grid").fadeIn(300)
    });
    $("#creative-link").on("click", function () {
        $(".grid").fadeOut(500, function () {
            $(".grid").html("");

            $(work).each(function (i) {
                if (this.id === "creative") {
                    projectPopulate(i)

                }
            })
        })
        $(".grid").fadeIn(300)
    });
    $("#all-portfolio-link").on("click", function () {
        $(".grid").fadeOut(300, function () {
            $(".grid").html("");

            $(work).each(function (i) {
                projectPopulate(i)

            })
        });
        $(".grid").fadeIn(300)

    })

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


    // Project Hover - transition and link
    $(document).on("mouseenter", ".item", function () {
        $(this).find("div.more-info").animate({
            "height": "60px",
        }, 400)
    });
    $(document).on("mouseleave", ".item", function () {
        $(this).find("div.more-info").animate({
            "height": "0px",
        }, 400)
    });
})
