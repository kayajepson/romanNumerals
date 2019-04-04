function length1(numbers) {
  var numberInput = $("#input").val().split('');
    if (numberInput[0] === "1") {
      $("#output").text("I").show();
    } else if (numberInput[0] === "2") {
      $("#output").text("II").show();
    } else if (numberInput[0] === "3") {
      $("#output").text("III").show();
    } else if (numberInput[0] === "4") {
      $("#output").text("IV").show();
    } else if (numberInput[0] === "5") {
      $("#output").text("V").show();
    } else if (numberInput[0] === "6") {
      $("#output").text("VI").show();
    } else if (numberInput[0] === "7") {
      $("#output").text("VII").show();
    } else if (numberInput[0] === "8") {
      $("#output").text("VIII").show();
    } else if (numberInput[0] === "9") {
      $("#output").text("IX").show();
    }
}

function length2(numbers) {
  var numberInput = $("#input").val().split('');
    if (numberInput[0] === "0") {
      $("#output").text("X").show();
    } else if (numberInput[0] === "2") {
      $("#output").text("XX").show();
    } else if (numberInput[0] === "3") {
      $("#output").text("XXX").show();
    } else if (numberInput[0] === "4") {
      $("#output").text("XL").show();
    } else if (numberInput[0] === "5") {
      $("#output").text("L").show();
    } else if (numberInput[0] === "6") {
      $("#output").text("LX").show();
    } else if (numberInput[0] === "7") {
      $("#output").text("LXX").show();
    } else if (numberInput[0] === "8") {
      $("#output").text("LXXX").show();
    } else if (numberInput[0] === "9") {
      $("#output").text("XC").show();
    }
}


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#input").val().split('');
    console.log(numberInput[0]);
    if (numberInput.length === 1) {
      length1(numberInput[0])
    } else
    if (numberInput.length === 2) {
      length1(numberInput[0]) + length2(numberInput[1])
    }
  });
});
