$("#create").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#burger").val().trim()
    }
    $("#burger").val("");
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
})

$(".devour").on("click", function (event) {
    event.preventDefault();
    var burgerID = {
        id: $(".devour").val()
    }
    console.log(burgerID);
    $.ajax("/api/burgers/" + burgerID.id, {
        type: "PUT",
        data: burgerID
    }).then(function() {
        console.log(`Burger ID changed: ${burgerID.id}`);
        // if (err) throw err;
        location.reload();
    })
})