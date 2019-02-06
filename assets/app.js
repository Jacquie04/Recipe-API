$(document).ready(function () {
            
    var apiKey = "3955712a4b398a2594e0f388e6361082";

    function searchFood(event) { 
        console.log(this);
        var selectedFood = $(this).val();
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
                $("#chick").text(JSON.stringify(recipe[0].title));


        });
    }
    //searchFood();//

    $('#selectIngredients').change(searchFood);








});