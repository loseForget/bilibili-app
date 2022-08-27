function resetSize() {
  let divece = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
  if(divece >= 750) {
    divece = 750
  }
  if(divece <= 350) {
    divece = 350
  }
  document.documentElement.style.fontSize = (divece / 7.5) + 'px'
  document.body.style.fontSize = 0.3 + 'rem'
}

window.onload = function() {
  resetSize()
}

window.onresize = function() {
  resetSize()
}