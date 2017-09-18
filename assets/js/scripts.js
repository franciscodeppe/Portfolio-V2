var $grid = $('.grid').masonry({
    columnWidth: 50,
    horizontalOrder: true,
});


var work = [{
        name: "Pool-Side",
        source: "/creative/peice4.png",
        type: "Art",
        id: "art",
        client: "Personal Project",
        description: "Art Work"
    }, {
        name: "Armet-Davis",
        source: "project1-web.png",
        type: "Web Application",
        id: "web",
        client: "Armet Davis Newlove & Associates",
        description: "Armet Davis Newlove needed an entire website overhaul. There previous website had not be touhced since the late 90's and so I took it upon myself to give them a fresh new look that also appealed to their historical roots of design. I selected a color scheme I thought fit for the architecture firm who's history and aesthetic can be traced to the 60's. I wanted to give them a signficant landing page as well which showcased some of their more popular and well known work. The website also features a fully functional file access application with authentication for Administrators, Architects as well as the Firm's Clients. It served to help facilitate the document access their clients in an intuitive web-app design.  <br> Languages used: HTML, CSS, JS"
    },
    {
        name: "Eye",
        source: "creative/Image 5.png",
        type: "Art",
        id: "creative",
        client: "Personal",
        description: "Art Work"
    }, {
        name: "AtoZ",
        source: "project2-logo.gif",
        type: "Logo Design",
        id: "logo",
        client: "Freelance",
        description: "I had been working on doing some mock brand/logo work and a friend passed by with a request for one she could use as a graphic for a business card or personal blog. Given her initials A. Z. and some direction with style and taste I created this logo making use of negative space and simple shapes."
    }, {
        name: "Giphy",
        source: "project3-web.png",
        type: "Web Application",
        id: "web",
        client: "Personal",
        description: "A personal project which allowed me to practice hooking ino public API's to retreive data and manipulate the dom. Using the Giphy API I was able to create a application which allowed for searches to Giphy website. The search would then append matches to the DOM and allow for pause = resume of the gif. Functionality for a slider to determine how many gifs to show as well as one for rating as added for a more complete application. <br> Languages used: HTML, CSS, JS"
    },
    {
        name: "Hangman",
        source: "project4-web.png",
        type: "Web Application",
        id: "web",
        client: "Personal",
        description: "A simple project for futher practice of DOM manipulation and javascript game theory. Simply an array of objects which contained words and clues to what needed to be guessed. Feautres a yeyup events to track what keys are being pressed as well as some ajax dom manipulation to display the pressed letter in its occupied space.<br> Languages used: HTML, CSS, JS"
    },
    {
        name: "Noise",
        source: "creative/affinity2.jpg",
        type: "Art",
        id: "creative",
        client: "Personal",
        description: "Art Work"
    }, {
        name: "Sketch Art",
        source: "creative/Image 2.png",
        type: "Art",
        id: "creative",
        client: "",
        description: "Art Work"
    }, {
        name: "The Thing",
        source: "creative/Image 3.png",
        type: "Art",
        id: "creative",
        client: "",
        description: "Art Work"
    }, {
        name: "Social Models",
        source: "project5-logo.jpg",
        type: "Logo Design",
        id: "logo",
        client: "Social Models",
        description: "A client needed a brand logo for a new web based talent/model agency that was being formed. They asked for a modern, sleek feel and design to go with their pages aesthetic. I assisted in the early design process, supplying some ideas which they based their actual logo off of.<br> Created using Photoshop."
    }, {
        name: "The Latest",
        source: "project6-web.png",
        type: "Web Application",
        id: "web",
        client: "Team Project",
        description: "The Latest was a web application aimed at bringing all of your news sources to one place. I served as the lead Front-End and UI/UX developer. I created the layout and design for the project and implement a back-end to tie into that design."
    }
]
// Background-Image ---------
function background(item) {
    var backgrounds = ["background-1.png", "background-2.png", "background-3.png", "background-4.png", "background-5.png"]

    
    
    $(item).each(function () {
        var item = backgrounds[Math.floor(Math.random() * backgrounds.length)]
        $(this).css(
            "background-image", "url(assets/media/Project-Backgrounds/" + item + ")");
    })
}

function projectPopulate(i) {
    var projectContainer = "<div class='item " + work[i].id + "'>" +
        "<div class='project-img'>" +
        "<img src='assets/media/" + work[i].source + "' alt=''>" +
        "</div>" +
        "<a href='#'><div id='" + work[i].name + "' class='more-info'><h3>More Info</h3>" +
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
background(".item")

// Search through work ----------------------
$(document).ready(function (event) {

    $("#web-design-link").on("click", function () {
        // remove current items
        $(".grid").fadeOut(500, function () {
            $(".grid").html("");

            $(work).each(function (i) {
                if (this.id === "web") {
                    projectPopulate(i)
                    background(".item")

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
                    background(".item")
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
                    background(".item")

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
                background(".item")

            })
        });
        $(".grid").fadeIn(300)

    })



    // page transitions

    $(".right-column").css("display", "none");
    $(".right-column").fadeIn(1500);


    $("#about-link").click(function (event) {
        $(".about").animate({
            "left": "0px",

        }, 500)
        $(".about").css("overflow", "visible")
    });

    $(".back").click(function (event) {
        $(".about").animate({
            "left": "100vw",
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
    // Project Select ----------------------
    function relatedWork(i) {
        var relatedWork =
            "<div id='" + work[i].name + "' class='" + work[i].id + " related-project-container'>" +
            "<div class='related-project-img'>" +
            "<img src='assets/media/" + work[i].source + "' alt=''>" +
            "</div>" +
            "<div class='related-project-info'>" +
            "<h3>" + work[i].name + "</h3>" +
            "<h4>" + work[i].type + "</h4>" +
            "</div>" +
            "</div>" +
            "</div>";

        $(".related-work").append(relatedWork);
        return i < 3

       
    }

    function selectedProject(i) {


        var projectTable =
            "<h2>stats</h2>" + "<hr>" +
            "<table><tbody>" +
            "<tr><td>Client:</td>" +
            "<td>Category:</td>" +
            "</tr><tr><td>" + work[i].client + "</td><td>" + work[i].type +
            "</td></tr></tbody></table>"



        var projectShow =
            "<div class='" + work[i].id + " selected-project-container'>" +
            "<div class='row'>" +
            "<h3>" + work[i].name + "</h3>" +
            "<p> by Francisco Deppe</p>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='selected-project-img'>" +
            "<img src='assets/media/" + work[i].source + "' alt=''>" +
            "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='selected-project-info container'>" +
            "<div class='col-lg-7 col-xs-7'>" +
            "<h2>project description</h2><hr><p>" +
            work[i].description +
            "</p></div>" +
            "<div class='col-lg-4 col-xs-4'>" +
            projectTable +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='related col-lg-12 col-xs-12'>" +
            "<h2>related work</h2>" + "<hr>" +
            "<div class='related-work'>" + "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        $(".selected-project").html("");
        $(".selected-project").append(projectShow);

        var type = work[i].type
        var name = work[i].name

        $(work).each(function (i) {
            if (work[i].type === type && work[i].name !== name) {
                relatedWork(i)
                background(".related-project-img")
            }

        });

    }



    $(document).on("click", ".more-info", function () {

        var id = $(this).attr("id")

        $(work).each(function (i) {
            if (id === work[i].name) {
                selectedProject(i)
                background()
            }
        })

        $(document).on("click", ".related-project-container", function () {

            name = $(this).attr("id")
            $(work).each(function (i) {

                if (name === work[i].name) {
                    $(".selected-project").fadeOut(500, function () {

                    }).promise().done(function () {
                        selectedProject(i)
                        background()
                        $(".selected-project").fadeIn(1000)
                    });

                }
            })
        })


        $(".project-page").stop().animate({
            "right": "0px",

        }, 500);
        $(".project-page").css("overflow", "visible")

        $(".back").click(function (event) {
            $(".project-page").animate({
                "right": "100vw",
            }, 500)
            $(".project-page").css("overflow", "hidden")
        });

    })
})