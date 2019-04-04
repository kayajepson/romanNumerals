function length1(numbers) {
  var numberInput = $("#input").val().split('');
    if (numberInput[0] === "1") {
      console.log("I");
    } else if (numberInput[0] === "2") {
      console.log("II");
    }
}


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#input").val().split('');
    // console.log(numberInput[0]);
    if (numberInput.length === 1) {
      length1(numberInput[0])

    }
  });
});
