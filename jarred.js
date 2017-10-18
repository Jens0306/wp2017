
$("document").ready(function(){
//$("#bton").hover(
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
});
