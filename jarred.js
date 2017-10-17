
$("document").ready(function(){
//$("#bton").hover(
    var flag = 0;
    $("#layer3").animate({"background-position":"-1250px"}, 1000);
    $("#layer1").animate({"background-position":"500px"}, 1000);
    $("#layer2").animate({"background-position":"-1120px"}, 1000);
    $("p").animate({"opacity":"1"}, 1800);
    $("a").animate({"opacity":"1"}, 1800);
  if (flag == 0) {
    setTimeout(function(){
      $("#layer1").animate({"background-position":"-1920px"}, 1000);
      $("#layer2").animate({"background-position":"-1920px"}, 1000);

      $("#layer1").animate({"background-position":"500px"}, 1000);
      $("#layer2").animate({"background-position":"-1120px"}, 1000);

    }, 3000);
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

});
