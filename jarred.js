$("document").ready(function(){
  $("#menu").click(function(){
    //$("#about_me").toggle("slide");
    //$("#contact").toggle("slide"); 
    //$("#skill").toggle("slide"); 
    $("#about_me").toggle("slide", { direction: "left" }, 1000);
    //$("#about_me").show("slide", { direction: "left" }, 1000);
  });
});
function myFunction() {
    alert("Hello\nHow are you?");
}
