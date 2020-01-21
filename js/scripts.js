$(document).ready(function() {
 $("#list").submit(function(event) {  event.preventDefault();
    var foods = ["food1","food2","food3"];
    var sortUpper = foods.map(function(food) {
      return food.toUpperCase(); 
    });
    sortUpper.sort();
});