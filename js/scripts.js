// The program takes a number input from the user. | 6 | 6 | //

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#input").val();
    console.log(numberInput);
  });
});
