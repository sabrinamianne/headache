
$(document).ready(function() {
  $('form#insurance').submit(function(event) {
    var a = parseInt($("input#value1").val());
    var b = parseInt($("input#value2").val());
    var c = parseInt($("input#value3").val());



  if (a === b && b === c) {
  $("#rate").empty().append("This is a Equilateral");
  $("#quote").show();
  }

  if ( a === b && b !== c || b === c && b !== a || a === c && a !== b) {
  $("#rate").empty().append("This is a Isosceles");
  $("#quote").show();
  }
  
  if ( a !== b && a+b > c && b !== c && c + b > a && a !== c && a + c > b) {
  $("#rate").empty().append( "This is a scalene");
  $("#quote").show();
  }

  else {
  $("#rate").empty().append("This is not a triangle");
  $("#quote").show();
  }
  

   event.preventDefault();  
 });
});