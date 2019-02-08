function displayDrinkInfo() {

    var drink = ["vodka", "rum", "coffee", "tequila", "bourbon", "gin", "scotch", "brandy"];

    function drinkOptions(option) {

        if (option === "chicken") {
            return drink[5];
        } else if (option === "steak") {
            return drink[4];
        } else if (option === "fish") {
            return drink[7];
        } else if (option === "veggies") {
            return drink[3];
        } else if (option === "chocolate") {
            return drink[1];
        } else if (option === "pastries") {
            return drink[0];
        } else if (option === "cake") {
            return drink[2];
        } else if (option === "custards") {
            return drink[6];
        };

    };

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?&i=" + drinkOptions($(this).attr("data-value"));



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var results = response.drinks;
        console.log(results);

        for (var i = 0; i < 5; i++) {

            var drinkDiv = $("<div>");
            drinkDiv.addClass("col-sm");

            var p = $("<p>").text("Cocktail " + response.drinks[i].strDrink);

            var drinkImage = $("<img>");

            drinkImage.attr("src", response.drinks[i].strDrinkThumb);


            drinkDiv.append(drinkImage);
            drinkDiv.append(p);

            $("#cocktails-display").prepend(drinkDiv);


        };
    });
};


$('#responsive-menu .submenu .is-submenu-item').click(displayDrinkInfo);


