$(document).ready(function () {

    //variable holding API Key     
    var apiKey = "bf5228b5668d08c22117400f2cecc04e";

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
            for (var i = 0; i < 5; i++) {
                var foodDiv = $("<div class='food'>");

                var foodTitle = $("<p class='food-title'>").text(recipe[i].title);

                var foodImage = $("<img class='food-image'>").attr("src", recipe[i].image_url);

                var foodLink = $("<a class='food-link'>").attr("href", recipe[i].source_url).text("Find Recipe Here");

                var foodPopular = $("<p class='food-pop'>").text("Recipe Rating: " + recipe[i].social_rank + "/100")





                foodDiv.append(foodImage);
                foodDiv.append(foodTitle);
                foodDiv.append(foodPopular);
                foodDiv.append(foodLink);



                $("#food").prepend(foodDiv);

            };






        });
    }

    //updates #selectIngredients div to react to searchFood function

    // $('#selectIngredient').change(searchFood);
    $('#responsive-menu .submenu .is-submenu-item').click(searchFood);

    var database;


    var config = {
        apiKey: "AIzaSyD4_23ODbw3YdQ-vXlePNcuQUDn6YJJwgw",
        authDomain: "booze-foods-email-list.firebaseapp.com",
        databaseURL: "https://booze-foods-email-list.firebaseio.com",
        projectId: "booze-foods-email-list",
        storageBucket: "booze-foods-email-list.appspot.com",
        messagingSenderId: "217093824601"
    };
    firebase.initializeApp(config);
    database = firebase.database();

    function submitEmail() {
  
        var clientEmail = document.getElementById('email').value;
        var newEmail = database.ref().child('Emails').push().key;
         database.ref('Emails/'+newEmail+'email').set(clientEmail);
        
 
    }

    $(".fire").click(submitEmail);

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      
      function validate() {
        var $result = $("#result");
        var email = $("#email").val();
        $result.text("");
      
        if (validateEmail(email)) {
          $result.text(email + " is valid. Expect more news from Booze Foodz! :)");
          $result.css("color", "green");
        } else {
          $result.text(email + " is not valid. Please enter a valid email address :(");
          $result.css("color", "red");
        }
        return false;
      }
      
      $(".fire").bind("click", validate);



   

});

