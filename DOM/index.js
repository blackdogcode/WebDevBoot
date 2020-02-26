setTimeout(function(){
  alert("Document Changed!");
  // change list text attribute
  var lists = document.body.querySelector("ul");
  lists.lastElementChild.innerHTML = "Liam, Song";
  // change list link color
  document.querySelector(".list a").style.color = "#c70d3a";
}, 3000);
