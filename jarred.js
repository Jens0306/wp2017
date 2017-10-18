
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
});
