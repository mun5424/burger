
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("devour");

        var newDevourState = {
            devour: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                location.reload();
            }
            );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgername").val().trim(),
            devour: false
        };

        console.log(newBurger); 
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
            );
    });

});
