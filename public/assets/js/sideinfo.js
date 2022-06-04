////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// BUTTON AND SIDE INFO
var sideinfo = document.getElementById("mySideInfo");
var openBtnInfo = document.getElementById("openBtnInfo");
var closeBtnInfo = document.getElementById("closeBtnInfo");

openBtnInfo.onclick = openInfo;
closeBtnInfo.onclick = closeInfo;

/* Set the width of the side navigation to 250px */
function openInfo() {
  sideinfo.classList.toggle("active");
}

/* Set the width of the side navigation to 0 */
function closeInfo() {
  sideinfo.classList.toggle("active");
}
