
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
 var main = document.querySelector("#nested .target");
 return main;
}

function  deepestChild(){
  var deep = document.querySelector("#grand-node div div div div");
  return deep;
}

function increaseRankBy(n){
  var n = document.querySelectorAll(".ranked-list");
  for(var i = 0; i < n.length; i++){
    n[i].innerHTML = (i + 1).toString();
  }
  return n;
}
