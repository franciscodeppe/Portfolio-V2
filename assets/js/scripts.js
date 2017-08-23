$(".panel-group").on("click", function () {
    
    var value = $("#collapse2").attr('aria-expanded')
    console.log(value)
    if (value === "false") {
        console.log("yes")
        $(".projects-column").css("justify-content", "baseline")
    } else if (value === "true") {
        $(".projects-column").css("justify-content", "center")
    }
})