
$("document").ready(function(){
  var flag = 1;
  $("#menu").animate({"right":"75%"}, 1000);
  $("#middle_1").animate({"right":"50%"}, 1000);
  $("#bottom_1").animate({"right":"-30%"}, 1000);
  setInterval(function(){
    if (flag == 0) {
      //first layer
      $("#middle_2").css({"z-index":"2"});
      $("#bottom_2").css({"z-index":"1"});
      $("#middle_1").css({"z-index":"4"});
      $("#bottom_1").css({"z-index":"3"});
      $("#middle_1").animate({"right":"50%"}, 1000);
      $("#bottom_1").animate({"right":"-30%"}, 1000);
      //second layer flash back
      setTimeout(function(){
        $("#middle_2").css({"right":"100%"});
        $("#bottom_2").css({"right":"100%"});
      }, 2000);
      //flag
      flag = 1;
    }
    else {
      //first layer
      $("#middle_1").css({"z-index":"2"});
      $("#bottom_1").css({"z-index":"1"});
      $("#middle_2").css({"z-index":"4"});
      $("#bottom_2").css({"z-index":"3"});
      $("#middle_2").animate({"right":"50%"}, 1000);
      $("#bottom_2").animate({"right":"-30%"}, 1000);
      //second layer
      setTimeout(function(){
        $("#middle_1").css({"right":"100%"});
        $("#bottom_1").css({"right":"100%"});
      }, 2000);
      //flag
      flag = 0;
    }
  },4000);
//$("#bton").hover(
/*
    var flag = 0;
    $("#layer3").animate({"background-position":"-1550px"}, 1000);
    $("#layer1").animate({"background-position":"500px"}, 1000);
    $("#layer2").animate({"background-position":"-1200px"}, 1000);
    $("p").animate({"opacity":"1"}, 1800);
    $("a").animate({"opacity":"1"}, 1800);
  setInterval(function(){
    if (flag == 0) {
      setTimeout(function(){
        $("#layer1_0").animate({"background-position":"500px"}, 1200);
        $("#layer2_0").animate({"background-position":"-1150px"}, 1000);
        setTimeout(function(){
          $("#layer1").animate({"background-position":"-1920px"}, 1000);
          $("#layer2").animate({"background-position":"-1920px"}, 1000);
        }, 1000);
    }, 1000);
    flag++;
    flag %= 2;
  }
  else {
    setTimeout(function(){
      $("#layer1").animate({"background-position":"-1720px"}, 1000);
      $("#layer1").animate({"background-position":"500px"}, 1000);
    }, 3000);
    flag++;
    flag %= 2;
  }
}, 3000);
*/
});
