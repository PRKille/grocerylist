$(document).ready(function() {
 $("#list").submit(function(event) {  event.preventDefault();
  var sortUpper = []
  var foods = [$("#food1").val(), $("#food2").val(), $("#food3").val()];
    console.log(foods);
  foods.forEach(function(food){
    sortUpper.push(food.toUpperCase());
    console.log(sortUpper);
    sortUpper.sort();
    });
    $("#list").hide();
    $(".orderedlist").append("<li>" + sortUpper[0] + "</li>" + "<li>" + sortUpper[1] + "</li>" + "<li>" + sortUpper[2] + "</li>");
  
  });    
});