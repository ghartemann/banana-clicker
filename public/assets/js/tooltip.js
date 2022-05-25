// tooltip found on https://jsfiddle.net/tdwvr21j/1/
var tooltip = document.querySelectorAll(".tooltip");

document.addEventListener("mousemove", fn, false);

function fn(e) {
  for (var i = tooltip.length; i--; ) {
    // tooltip[i].style.left = e.pageX + "px";
    // tooltip[i].style.top = e.pageY + "px";
    tooltip[i].style.left = e.pageX + "px";
    tooltip[i].style.top = e.pageY + "px";
  }
}
