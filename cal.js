var clear = false;
var result = "";
var calc = "";

$(document).ready(function() {
  $("button").click(function() {
    //Get value from the clicked button.
    var text = $(this).attr("value");

    //Check the value from the clicked button and move it to the textbox.
    if (parseInt(text, 10) == text ||
                      text === "%" ||
                      text === "/" ||
                      text === "*" ||
                      text === "-" ||
                      text === "+" ||
                      text === ".") {
      if (clear === false) {
        calc += text;
        $(".textBox").val(calc);
      } else {
        calc = text;
        $(".textBox").val(calc);
        clear = false;
      }
    }

    switch (text) {
      //Clear all textbox.
      case "C":
        calc = "";
        $(".textBox").val("");
        break;

        //Clear the last character digited.
      case "CE":
        calc = calc.slice(0, -1);
        $(".textBox").val(calc);
        break;

        //Calculate and show the result.
      case "=":
        result = eval(calc);
        $(".textBox").val(result);
        clear = true;
        break;

        //Change the signal.
      case "+/-":
        if (clear === false) {
          calc = calc * -1;
          $(".textBox").val(calc);
        } else {
          result = result * -1;
          $(".textBox").val(result);
        }
        break;
    }
  });
});