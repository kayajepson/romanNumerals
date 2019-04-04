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


var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],        // Hundreds
                    ["", "M", "MM", "MMM"]];                                  // Thousands

function convert(num) {
var numeral = "";
var digits = num.toString().split('').reverse();
for (i = 0; i < numberInput.length; i++) {
  numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
}
 return numeral;
}

function length2(numbers) {
  var numberInput = $("#input").val().split('');
    if (numberInput[1] === "1") {
      $("#output").text("X").show();
    } else if (numberInput[1] === "2") {
      $("#output").text("XX").show();
    } else if (numberInput[1] === "3") {
      $("#output").text("XXX").show();
    } else if (numberInput[1] === "4") {
      $("#output").text("XL").show();
    } else if (numberInput[1] === "5") {
      $("#output").text("L").show();
    } else if (numberInput[1] === "6") {
      $("#output").text("LX").show();
    } else if (numberInput[1] === "7") {
      $("#output").text("LXX").show();
    } else if (numberInput[1] === "8") {
      $("#output").text("LXXX").show();
    } else if (numberInput[1] === "9") {
      $("#output").text("XC").show();
    }
}




$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#input").val().split('');
    console.log(numberInput);
    if (numberInput.length === 2) {
      length1(numberInput[0]).concat(length2(numberInput[1]));
    } if (numberInput.length === 1) {
      length1(numberInput[0])
    }
  });
});
