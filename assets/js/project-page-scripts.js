var individualWork = [{
        name: "Armet-Davis",
        source: "project1-web.png",
        type: "Web Application",
        id: "web",
        client: "freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "AtoZ",
        source: "project2-logo.gif",
        type: "Logo Design",
        id: "logo",
        client: "freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "Giphy",
        source: "project3-web.png",
        type: "Web Application",
        id: "web",
        client: "freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    },
    {
        name: "Hangman",
        source: "project4-web.png",
        type: "Web Application",
        id: "web",
        client: "freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "Social Models",
        source: "project5-logo.jpg",
        type: "Logo Design",
        id: "logo",
        client: "freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "The Latest",
        source: "project6-web.png",
        type: "Web Application",
        id: "web",
        client: "freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }, {
        name: "Trivia Game",
        source: "project7-web.png",
        type: "Web Application",
        id: "web",
        client: "freelance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!"
    }
]
console.log(projectPageSelected)

$(individualWork).each(function (i) {
    if (work[i].name === projectPageSelected) {


        var projectTable =
            "<h2>stats</h2>" + "<hr>" +
            "<table>" + "<tbody>" +
            "<tr>" + "<td>Client</td>" +
            "<td>" + this.client + "/td>" +
            "</tr>" + "<tr>" + "<td>Category</td>" + "<td>" + this.id + "</td>" + "</tr>" + "</tbody>" + "</table>"



        var projectContainer =
            "<div class='" + this.id + " project-container'>" +
            "<div class='row'>" +
            "<h3>" + this.name + "</h3>" +
            "<p> by Francisco Deppe</p>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='project-img'>" +
            "<img src='assets/media/" + this.source + "' alt=''>" +
            "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='project-info'>" +
            "<div class='col-lg-7 col-xs-7'>" +
            "<h2>project description</h2>" + "<hr>" +
            this.description +
            "</div>" +
            "<div class='col-lg-4 col-xs-4'>" +
            projectTable +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='related'>" +
            "<h2>related work</h2>" + "<hr>" +
            "<div class='related-work'>" + "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        $(".projects").apend(projectContainer);


        $(individualWork).each(function (i) {

            var relatedWork =
                "<div class='" + this.id + " related-project-container'>" +
                "<div class='related-project-img'>" +
                "<img src='assets/media/" + this.source + "' alt=''>" +
                "</div>" +
                "<div class='related-project-info'>" +
                "<h3>" + this.name + "</h3>" +
                "<h4>" + this.type + "</h4>" +
                "</div>" +
                "</div>" +
                "</div>";

            if (this.id === "web") {
                $(".related-work").append(relatedWork);

            }
            return i < 3
        });
    };
});