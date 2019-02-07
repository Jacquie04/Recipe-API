$(document).ready(function () {
    //variable holding API Key     
    var apiKey = "12a37fc09682cbc92a8a0e59fe7e5433";

    //To Give function to drop down
    function searchFood(event) { 
        console.log(this);
        var selectedFood = $(this).val();
        var queryURL = "https://www.food2fork.com/api/search?key=" + apiKey + "&q=" + selectedFood + "&count=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var object = JSON.parse(response);
            console.log(object);
            var recipe = object.recipes;
            console.log(recipe);
            //for loop holding title, link and image of recipe
           for (var i = 0; i< 10; i++) {
                var foodDiv = $("<div class='food'>");
                
                var foodTitle = $("<p class='food-title'>").text(recipe[i].title);

                var foodImage = $("<img class='food-image'>").attr("src", recipe[i].image_url);

                var foodLink = $("<a class='food-link'>").attr("href", recipe[i].source_url).text("Find Recipe Here");

                var foodPopular = $("<p class='food-pop'>").text("Recipe Rating: " + recipe[i].social_rank + "/100")

                

                
                foodDiv.append(foodLink);
                foodDiv.append(foodImage);
                foodDiv.append(foodTitle);
                foodDiv.append(foodPopular);
                
                

                $("#food").prepend(foodDiv);

           };

            
            
            

                
        });
    }
    //updates #selectIngredients div to react to searchFood function

    $('#selectIngredients').change(searchFood);








});