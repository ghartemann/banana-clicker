////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// BUTTON AND SIDE INFO
let sideinfo = document.getElementById("mySideInfo");
let closeBtnInfo = document.getElementById("closeBtnInfo");

closeBtnInfo.onclick = closePanel;

// display text and open panel
function openPanel(type) {
  if (sideinfo.classList.contains("active")) {
    closePanel();
    let text = document.getElementById(type + "Text");
    text.classList.remove("unavailable");
    setTimeout(sideinfo.classList.add("active"), 2000);
  } else {
    let text = document.getElementById(type + "Text");
    text.classList.remove("unavailable");
    sideinfo.classList.add("active");
  }

  // display text
}

// close panel and hide all text
function closePanel() {
  sideinfo.classList.remove("active");

  // hide all text
  let infoText = document.getElementById("infoText");
  let changelogText = document.getElementById("changelogText");
  let roadmapText = document.getElementById("roadmapText");
  infoText.classList.add("unavailable");
  changelogText.classList.add("unavailable");
  roadmapText.classList.add("unavailable");
}
