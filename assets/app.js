var food = {
    main: ["chicken", "steak", "fish", "veggies"],
    desserts: ["chocolate", "pastries", "cake", "custards"],
};


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
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?&i=" + drinkOptions($(this).text());


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

            $("#drink-image").prepend(drinkDiv);


        };
    });
};

function renderButtons() {


    for (var i = 0; i < food.main.length; i++) {

        var a = $("<button>");

        a.addClass("btn");
        a.addClass("btn-light");
        a.addClass("main-btn");

        a.attr("data-name", food.main[i]);

        a.text(food.main[i]);


        var b = $("<div>");
        b.addClass("col-sm");
        b.append(a);
        $("#firstRow").append(b);

    };

    for (var i = 0; i < food.desserts.length; i++) {

        var a = $("<button>");

        a.addClass("btn");
        a.addClass("btn-light");
        a.addClass("dessert-btn");

        a.attr("data-name", food.desserts[i]);

        a.text(food.desserts[i]);


        var b = $("<div>");
        b.addClass("col-sm");
        b.append(a);
        $("#firstRow").append(b);

    };
};

$(document).on("click", ".main-btn", displayDrinkInfo);
$(document).on("click", ".dessert-btn", displayDrinkInfo);




/*var cocktail = {
    chicken = drink[4,5],
    steak = drink [4,6],
    fish = drink [0,7],
    veggies = drink [1,3],
    chocolate = drink [1,7],
    pastries = drink [0,4],
    cake = drink [1,2],
    custards = drink [5,6],
};*/

renderButtons();
