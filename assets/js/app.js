$(document).ready(function () {
    //variable holding API Key     
    var apiKey = "0983c575d6b9abe6a0020f9edddf423c";
    console.log(this);
    //To Give function to drop down
    function searchFood(event) {
        console.log(this);
        var selectedFood = $(this).attr('data-value');
        var queryURL = "https://www.food2fork.com/api/search?key=" + apiKey + "&q=" + selectedFood + "&count=5";

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
           for (var i = 0; i< 5; i++) {
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

    // $('#selectIngredient').change(searchFood);
    $('#responsive-menu .submenu .is-submenu-item').click(searchFood);
    

});

