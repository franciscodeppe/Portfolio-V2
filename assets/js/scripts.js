var $grid = $('.grid').masonry({
    columnWidth: 50,
    horizontalOrder: true,
});


var work = [{
        name: "Armet-Davis",
        source: "project1-web.png",
        type: "Web Application",
        id: "web",
        client: "Freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "AtoZ",
        source: "project2-logo.gif",
        type: "Logo Design",
        id: "logo",
        client: "Freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "Giphy",
        source: "project3-web.png",
        type: "Web Application",
        id: "web",
        client: "Personal",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    },
    {
        name: "Hangman",
        source: "project4-web.png",
        type: "Web Application",
        id: "web",
        client: "Personal",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "Social Models",
        source: "project5-logo.jpg",
        type: "Logo Design",
        id: "logo",
        client: "Freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "The Latest",
        source: "project6-web.png",
        type: "Web Application",
        id: "web",
        client: "Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "Trivia Game",
        source: "project7-web.png",
        type: "Web Application",
        id: "web",
        client: "Personal",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }
]

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
            }

        });

    }



    $(document).on("click", ".more-info", function () {

        var id = $(this).attr("id")

        $(work).each(function (i) {
            if (id === work[i].name) {
                selectedProject(i)
            }
        })

        $(document).on("click", ".related-project-container", function () {

            name = $(this).attr("id")
            $(work).each(function (i) {

                if (name === work[i].name) {
                    $(".selected-project").fadeOut(500, function () {
                        
                    }).promise().done(function () {
                        selectedProject(i)
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