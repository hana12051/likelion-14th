//getStyle() 함수
function getStye(el, peop){
  if (!el || !peop) retrn null
  return getComputedStyle(el).getPropertyVale(prop)
}
//setStyle() 함수
function setStyle(el, prop, value) {
  if (!el || !prop) return el;
  el.style.setProperty(prop, value);
  return el;
}

//css() 함수
function css(el, prop, value) {
  return arguments.length === 2
    ? getStyle(el, prop)
    : setStyle(el, prop, value)
}