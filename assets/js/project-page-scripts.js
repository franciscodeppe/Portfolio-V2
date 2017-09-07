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

    var projectContainer ="<h2>stats</h2>"+"<hr>" +
        "<div class='" + this.id + " project-container container'>" +
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
                    "<h2>project description</h2>"+"<hr>" + 
        
                        this.description + 
                    "</div>" +    
                    "<div class='col-lg-4 col-xs-4'>" +
                        projectTable +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";

        var projectTable =
        "<h2>stats</h2>"+"<hr>" + 
        "<table>"+"<tbody>"+
            "<tr>"+"
                <td>Client</td>"+"
                <td>" + this.client + "/td>"+"
            </tr>"+"
            <tr>"+"
                <td>Category</td>"+"
                <td>"+ this.id +"</td>"+"
            </tr>"+"
        </tbody>"+"
    </table>"

    var relatedWork = "<h2>stats</h2>"+"<hr>" + 
    "<div class='" + this.id + " related-project-container'>" +
    "<div class='related-project-img'>" +
    "<img src='assets/media/" + this.source + "' alt=''>" +
    "</div>" +
    "<div class='related-project-info'>" +
    "<h3>" + this.name + "</h3>" +
    "<h4>" + this.type + "</h4>" +
    "</div>" +
    "</div>";


    $(".projects").append(projectContainer);

});