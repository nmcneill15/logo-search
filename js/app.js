$(document).ready(function() {

  var logos = [];

  for (var i = 0; i < 16; i++) {
    var ranNum = Math.floor((Math.random() * 3) + 1);
    var colorLogo = "logo" + ranNum + ".png";
    var fadeLogo = "logo" + ranNum + "-fade.png";
    var colorTag = "<img" + " id='logo" + i +  "' class='logo-tag' src='img/" + colorLogo + "' />";
    var fadeTag = "<img" + " id='logo" + i +  "' class='logo-tag' src='img/" + fadeLogo + "' />";
    var logoObj = { color: colorTag, fade: fadeTag };
    logos.push(logoObj);
  }


  for (var i = 0; i < logos.length; i++) {
    $(".logos").append(logos[i].fade);
  }


  var scholarship = [2, 9, 1, 4];
  var loan = [8, 12, 6, 0, 5];
  var all1 = scholarship.concat(loan);
  var k12 = [4, 3, 7, 15];
  var highSchool = [14, 2, 10, 11, 13];
  var all2 = k12.concat(highSchool);


  var firstChoice = { all1: all1, scholarship: scholarship, loan: loan };
  var secondChoice = { all2: all2, k12: k12, highSchool: highSchool };



  $(".search-form").on("submit", function(e) {
    e.preventDefault();
    var firstField = $("#first-field").val();
    var secondField = $("#second-field").val();
    var combo = [];
    combo = combo.concat(firstChoice[firstField]);
    combo = combo.concat(secondChoice[secondField]);
    console.log(combo);
    selectLogos(combo);
  });


  function selectLogos(selection) {
    resetLogos();
    for (var i = 0; i < selection.length; i++) {
      $("#logo" + selection[i]).replaceWith(logos[selection[i]].color);
    }
  }

  function resetLogos() {
    for (var i = 0; i < logos.length; i++ ) {
      $("#logo" + i).replaceWith(logos[i].fade);
    }
  }

});
