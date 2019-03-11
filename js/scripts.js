var countTo = function(userNumber) {
  var results = [];

  for (var i = 1; i <= userNumber; i++) {
      if (i % 15 === 0) {
        results.push("Ping Pong");
      } else if (i % 5 === 0) {
        results.push("Pong");
      } else if (i % 3 === 0) {
        results.push("Ping");
      } else {
        results.push(i);
      }
    }
    return results;
  }

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    var result = countTo(userNumber);

    result.forEach(function(userNumber) {
      $("#result").append("<li> " + userNumber + "</li>");
      $("#result").fadeIn(2000);
      $("#result").show();
    });
  });
});

//Better way to fade in results?
//Refresh button or re-submit?
