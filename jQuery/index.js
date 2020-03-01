$(document).keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "blue");
});

$("button").on("click", function(){
  $("h1").fadeToggle();
});

$("img").attr("src", "https://www.hanyang.ac.kr/documents/20182/1944671/ERICA+%EC%A7%80%EB%8F%84+%ED%8F%89%EB%A9%B4%EB%8F%84+%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80+%28%EC%98%81%EB%AC%B801%29.jpg/b889498e-6dd0-4007-b79e-7728fa19ff07?t=1525948699276");
