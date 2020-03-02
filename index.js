function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  let list = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  let list = document.querySelector("div#grand-node")
  let node = null

  while (list) {
    node = list
    list = list.querySelector('*')
  }
  return node
}