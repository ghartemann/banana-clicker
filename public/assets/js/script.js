////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// MISC

// ask user if they're sure they actually want to quit, which is understandable but also a bit sad
/* window.addEventListener("beforeunload", (event) => {
  event.returnValue = `Are you sure you want to leave?`;
}); */

// displaying a fun little message
console.log(
  "Oui, il est possible de tricher assez facilement. Super, bonne ambiance vraiment."
);

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// DEFAULT VALUES AND GAMA INITIALIZATION

bananas = 0;
totalBananas = 0;
bps = 0;
bpc = 1;
clickRate = 1;
nbclicks = 0;
restclicks = 1000000;

// NUMBER OF CLICKERS AND BUFFS (will be used later)
const nbTiers = document.querySelectorAll("#buyableTiers [id$=Button]");
const nbBuffs = document.querySelectorAll("#buyableBuffs [id$=Button]");

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// TIERS PRICES

// Clicker
step1Name = "tierClicker";
// step1Owned = document.getElementById("tierClickerOwned").innerHTML;
// step1Price = document.getElementById("tierClickerPrice").innerHTML;
step1Multiplier = document.getElementById("tierClickerMultiplier").innerHTML;
step1PriceMultiplier = document.getElementById(
  "tierClickerPriceMultiplier"
).innerHTML;

// Bananier
step2Name = "tierTree";
step2Owned = document.getElementById("tierTreeOwned").innerHTML;
// step2Price = document.getElementById("tierTreePrice").innerHTML;
step2Multiplier = document.getElementById("tierTreeMultiplier").innerHTML;
step2PriceMultiplier = document.getElementById(
  "tierTreePriceMultiplier"
).innerHTML;

// Gorilla
step3Name = "tierGorilla";
step3Owned = document.getElementById("tierGorillaOwned").innerHTML;
// step3Price = document.getElementById("tierGorillaPrice").innerHTML;
step3Multiplier = document.getElementById("tierGorillaMultiplier").innerHTML;
step3PriceMultiplier = document.getElementById(
  "tierGorillaPriceMultiplier"
).innerHTML;

// Macaque
step4Name = "tierMacaque";
step4Owned = document.getElementById("tierMacaqueOwned").innerHTML;
// step4Price = document.getElementById("tierMacaquePrice").innerHTML;
step4Multiplier = document.getElementById("tierMacaqueMultiplier").innerHTML;
step4PriceMultiplier = document.getElementById(
  "tierMacaquePriceMultiplier"
).innerHTML;

/////////// BUFF BPC PRICES

// Cursor
buffBPC1Name = "buffCursor";
buffBPC1Owned = document.getElementById("buffCursorOwned").innerHTML;
buffBPC1Price = document.getElementById("buffCursorPrice").innerHTML;
buffBPC1Multiplier = document.getElementById("buffCursorMultiplier").innerHTML;
buffBPC1PriceMultiplier = document.getElementById(
  "buffCursorPriceMultiplier"
).innerHTML;

// Mega Cursor
buffBPC2Name = "buffMegaCursor";
buffBPC2Owned = document.getElementById("buffMegaCursorOwned").innerHTML;
buffBPC2Price = document.getElementById("buffMegaCursorPrice").innerHTML;
buffBPC2Multiplier = document.getElementById(
  "buffMegaCursorMultiplier"
).innerHTML;
buffBPC2PriceMultiplier = document.getElementById(
  "buffMegaCursorPriceMultiplier"
).innerHTML;

/////////// BUFF BPS PRICES

// CPU
buffBPS1Name = "buffCPU";
buffBPS1Owned = document.getElementById("buffCPUOwned").innerHTML;
buffBPS1Price = document.getElementById("buffCPUPrice").innerHTML;
buffBPS1Multiplier = document.getElementById("buffCPUMultiplier").innerHTML;
buffBPS1PriceMultiplier = document.getElementById(
  "buffCPUPriceMultiplier"
).innerHTML;

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// SAVE FUNCTION
// localStorage.clear();

if (localStorage.getItem("savedState") != null) {
  loadAllSaved();
}

let tiersArray = ["Clicker", "Tree", "Gorilla", "Macaque"];
let buffsBPCArray = ["Cursor", "MegaCursor"];
let buffsBPSArray = ["CPU"];

function saveTiers() {
  localStorage.setItem("savedState", true);
  saveOneTier("tierClicker");
  saveOneTier("tierTree");
  saveOneTier("tierGorilla");
  saveOneTier("tierMacaque");
}

function saveOneTier(tierName) {
  let tierValue = document.getElementById(tierName + "Owned").innerHTML;
  localStorage.setItem(tierName + "Saved", tierValue);
}

function saveStats() {
  // saving nbclicks
  let nbClicks = document.getElementById("nbClicks").innerHTML;
  localStorage.setItem("nbClicks", nbClicks);
  // saving bananas
  let bananas = document.getElementById("bananasNumber").innerHTML;
  localStorage.setItem("bananas", bananas);
  // saving bps
  let bps = document.getElementById("bps").innerHTML;
  localStorage.setItem("bps", bps);
  // saving total bananas
  let totalBananas = document.getElementById("totalBananasNumber").innerHTML;
  localStorage.setItem("totalBananas", totalBananas);
  // saving restclicks
  let restClicks = document.getElementById("restClicks").innerHTML;
  localStorage.setItem("restClicks", restClicks);
}

function saveToLocalStorage() {
  saveTiers();
  saveStats();
}

function loadAllSaved() {
  loadAllSavedTiers();
  loadAllStats();
  runAllChecks();
}

function loadAllSavedTiers() {
  loadSavedTiers("tierClicker");
  loadSavedTiers("tierTree");
  loadSavedTiers("tierGorilla");
  loadSavedTiers("tierMacaque");
}

function loadSavedTiers(tierName) {
  let savedTier = localStorage.getItem(tierName + "Saved");
  document.getElementById(tierName + "Owned").innerHTML = savedTier;
  document.getElementById(tierName + "OwnedB").innerHTML = savedTier;
  document.getElementById(tierName + "OwnedC").innerHTML = savedTier;
}

function loadAllStats() {
  bananas = parseInt(localStorage.getItem("bananas"), 10);
  document.getElementById("bananasNumber").innerHTML = bananas;
  nbclicks = parseInt(localStorage.getItem("nbClicks"), 10);
  document.getElementById("nbClicks").innerHTML = nbclicks;
  bps = parseInt(localStorage.getItem("bps"), 10);
  document.getElementById("bps").innerHTML = bps;
  restclicks = parseInt(localStorage.getItem("restClicks"), 10);
  document.getElementById("restClicks").innerHTML = restclicks;
  totalBananas = parseInt(localStorage.getItem("totalBananas"), 10);
  document.getElementById("totalBananasNumber").innerHTML = totalBananas;
}

console.log(localStorage);

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// CHEATS see cheatcode.js

function cheat() {
  updateBananas(10000);
  updateTotalBananas(10000);
  nbclicks = nbclicks + 50;
  document.getElementById("nbClicks").innerHTML = nbclicks;
  runAllChecks();
  console.log("+10k bananas");
}

let cheatCode = new cheatcode("b, a, n, a, n, a", () => {
  let cheat = document.getElementById("cheat");

  let cheatList = cheat.classList;
  cheatList.remove("unavailable");
  console.log("Cheat mode activated");
});

cheatCode.start();

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// MAIN FUNCTIONS
var perSecondIntervel = setInterval(perSecond, 1000);

function clickUp() {
  updateNbClicks();
  updateBananas(clickRate);
  updateTotalBananas(clickRate);
  runAllChecks();
  unavailableFirst();
}

function perSecond() {
  let bps = calcBPS();
  updateBananas(bps);
  updateTotalBananas(bps);
  runAllChecks();
  animateClicker();
  saveToLocalStorage();
  unavailableFirst();
}

function updateNbClicks() {
  nbclicks++;
  restclicks--;
  document.getElementById("nbClicks").innerHTML = nbclicks;
  document.getElementById("restClicks").innerHTML = restclicks;
}

function updateBananas(toAdd) {
  bananas = bananas + toAdd;
  document.getElementById("bananasNumber").innerHTML = bananas;
}

function updateTotalBananas(toAdd) {
  totalBananas = totalBananas + toAdd;
  document.getElementById("totalBananasNumber").innerHTML = totalBananas;
}

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CALC BPS AND BPC
function calcBPS() {
  let step1Owned = document.getElementById(step1Name + "Owned").innerHTML;
  prod = calcBPSDetail(step1Multiplier, step1Owned);
  let step2Owned = document.getElementById(step2Name + "Owned").innerHTML;
  prod = prod + calcBPSDetail(step2Multiplier, step2Owned);
  let step3Owned = document.getElementById(step3Name + "Owned").innerHTML;
  prod = prod + calcBPSDetail(step3Multiplier, step3Owned);
  let step4Owned = document.getElementById(step4Name + "Owned").innerHTML;
  prod = prod + calcBPSDetail(step4Multiplier, step4Owned);
  document.getElementById("bps").innerHTML = prod;
  return prod;
}

function calcBPSDetail(multiplier, owned) {
  prod = multiplier * owned;
  return prod;
}

function calcBPC() {
  buffBPC1Owned = document.getElementById(buffBPC1Name + "Owned").innerHTML;
  buffBPC2Owned = document.getElementById(buffBPC2Name + "Owned").innerHTML;
  prod = buffBPC1Multiplier * buffBPC1Owned;
  prod = prod + buffBPC2Multiplier * buffBPC2Owned;
  return prod;
}

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHECKING PRICES AND GREYING OUT BUTTONS
// runs all checks (for greying buttons)
function runAllChecks() {
  tiersPricesChecks();
  tiersPricesChecks10();
  buffsPricesChecks();
  unavailableCheck();
}

// runs individual checks, couls be optimized with a loop
function tiersPricesChecks() {
  tierPriceCheck("tierClicker");
  tierPriceCheck("tierTree");
  tierPriceCheck("tierGorilla");
  tierPriceCheck("tierMacaque");
}

// runs a specific check and greys out the related button
function tierPriceCheck(tierName) {
  let tierPrice = document.getElementById(tierName + "Price").innerHTML;
  let tierButton = document.getElementById(tierName + "Button");
  let tierButtonList = tierButton.classList;

  // Graying out prices
  if (tierPrice > bananas) {
    tierButton.disabled = true;
    tierButtonList.add("greyed");
  } else {
    tierButton.disabled = false;
    tierButtonList.remove("greyed");
  }
}

// runs individual checks for x10 buttons, couls be optimized with a loop
function tiersPricesChecks10() {
  tierPriceCheck10("tierClicker");
  tierPriceCheck10("tierTree");
  tierPriceCheck10("tierGorilla");
  tierPriceCheck10("tierMacaque");
}

// runs a specific check for x10 button and greys it out
function tierPriceCheck10(tierName) {
  let tierPrice = document.getElementById(tierName + "Price").innerHTML;
  let tierPriceMultiplier = document.getElementById(
    tierName + "PriceMultiplier"
  ).innerHTML;
  let tierNameButton10 = document.getElementById(tierName + "Button10");
  let tierNameButtonList10 = tierNameButton10.classList;

  let tierPrice10 = calcPrice10(tierPrice, tierPriceMultiplier);
  document.getElementById(tierName + "Price10").innerHTML = tierPrice10;

  // Graying out prices
  if (tierPrice10 > bananas) {
    tierNameButton10.disabled = true;
    tierNameButtonList10.add("greyed");
  } else {
    tierNameButton10.disabled = false;
    tierNameButtonList10.remove("greyed");
  }
}

function buffsPricesChecks() {
  buffPriceCheck(buffBPC1Name, buffBPC1Price);
  buffPriceCheck(buffBPC2Name, buffBPC2Price);
  buffPriceCheck(buffBPS1Name, buffBPS1Price);
}

function buffPriceCheck(buffName, buffPrice) {
  let buffNameButton = document.getElementById(buffName + "Button");
  let buffNameButtonList = buffNameButton.classList;

  if (buffPrice > bananas) {
    buffNameButton.disabled = true;
    buffNameButtonList.add("greyedBuff");
  } else {
    buffNameButton.disabled = false;
    buffNameButtonList.remove("greyedBuff");
  }
}

function unavailableCheck() {
  step2Owned = document.getElementById(step2Name + "Owned").innerHTML;
  unavailable(step3Owned, buffBPS1Name);
  unavailableClicks(buffBPC1Name, 100);
  unavailableClicks(buffBPC2Name, 500);
}

function calcPrice10(price, priceMultiplier) {
  let price10 = 0;
  for (let m = 0; m < 10; m++) {
    price10 = price10 + price * priceMultiplier;
  }
  price10 = Math.round(price10);
  return price10;
}

// hides everything until there are at least 30 clicks
function unavailableFirst() {
  if (bananas >= 30) {
    notAvailable = document.getElementById("buyableTiers");
    const notAvailableList = notAvailable.classList;
    notAvailableList.remove("unavailable");
    // removing small paragraph
    nothingTiers = document.getElementById("nothingTiers");
    const nothingTiersList = nothingTiers.classList;
    nothingTiersList.add("unavailable");
  }
}

// hides unavailable things (parameters : clicker, thing you wanna buy that depends from clicker ownership)
function unavailable(owned, notOwned) {
  if (owned > 0) {
    notOwned = document.getElementById(notOwned + "Div");
    const notOwnedList = notOwned.classList;
    notOwnedList.remove("unavailable");
    // removing small paragraph
    nothing = document.getElementById("nothing");
    const nothingList = nothing.classList;
    nothingList.add("unavailable");
  }
}

// hides unavailable things (parameters : thing you wanna buy, nb of clicks there has to be to unlock it)
function unavailableClicks(notOwned, clicksToMake) {
  if (nbclicks >= clicksToMake) {
    notOwned = document.getElementById(notOwned + "Div");
    const notOwnedList = notOwned.classList;
    notOwnedList.remove("unavailable");
    // removing small paragraph
    nothing = document.getElementById("nothing");
    const nothingList = nothing.classList;
    nothingList.add("unavailable");
  }
}

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// BUYING TIERS
function buyTier(tierName, tierMultiplier) {
  // fetching initial data
  let tierPrice = document.getElementById(tierName + "Price").innerHTML;
  let tierOwned = document.getElementById(tierName + "Owned").innerHTML;
  let tierPriceMultiplier = document.getElementById(
    tierName + "PriceMultiplier"
  ).innerHTML;

  if (bananas >= tierPrice) {
    // updating owned number and stats
    tierOwned++;
    document.getElementById(tierName + "Owned").innerHTML = tierOwned;
    document.getElementById(tierName + "OwnedB").innerHTML = tierOwned;
    document.getElementById(tierName + "OwnedC").innerHTML = tierOwned;
    let tierProd = tierOwned * tierMultiplier;
    document.getElementById(tierName + "Prod").innerHTML = tierProd;
    document.getElementById(tierName + "ProdB").innerHTML = tierProd;

    // updating bananas
    bananas = bananas - tierPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;

    // updating tier price
    tierPrice = Math.round(tierPrice * tierPriceMultiplier);
    document.getElementById(tierName + "Price").innerHTML = tierPrice;
    updateTiersPrices();

    /* updating tier price multiplier
    tierPriceMultiplier = tierPriceMultiplier * 0.999;
    document.getElementById(tierName + "PriceMultiplier").innerHTML =
      tierPriceMultiplier;
    console.log(tierPriceMultiplier);*/

    // updating bps
    calcBPS();

    // finally checking prices
    showClicker();
    runAllChecks();
  } else {
    alert("Pas assez de bananes !");
  }
}

function buyTier10(tierName, tierMultiplier) {
  // calculating price x10
  let tierPrice = document.getElementById(tierName + "Price").innerHTML;
  let tierPriceMultiplier = document.getElementById(
    tierName + "PriceMultiplier"
  ).innerHTML;

  let tierPrice10 = calcPrice10(tierPrice, tierPriceMultiplier);
  document.getElementById(tierName + "Price10").innerHTML = tierPrice10;

  if (tierPrice10 < bananas) {
    for (let l = 0; l < 10; l++) {
      buyTier(tierName, tierMultiplier);
    }
  } else {
    alert("Pas assez de bananes !");
  }
}

function updateTiersPrices() {
  step1Price = document.getElementById("tierClickerPrice").innerHTML;
  step2Price = document.getElementById("tierTreePrice").innerHTML;
  step3Price = document.getElementById("tierGorillaPrice").innerHTML;
  step4Price = document.getElementById("tierMacaquePrice").innerHTML;
}

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CURSORPOINTERS ANIMATION
function showClicker() {
  clickerNb = parseInt(
    document.getElementById("tierClickerOwned").innerHTML,
    10
  );
  clickerNb = clickerNb - 1;

  // adding visual clickers
  for (let j = 0; j < 18; j++) {
    let warpName = "w" + j;
    let warpGot = document.getElementById(warpName);
    if (clickerNb == warpGot.id.substring(1)) {
      let warpGotList = warpGot.classList;
      warpGotList.remove("unavailable");
    }
  }

  // showing a little explanation as to why there are no more new clickers displayed
  if (clickerNb > 17) {
    let enoughClickers = document.getElementById("enoughClickers");
    let enoughClickersList = enoughClickers.classList;
    enoughClickersList.remove("unavailable");
  }
}

function animateClicker() {
  for (let k = 0; k < 18; k++) {
    animateClickerToggle("w" + k + "pic");
    setTimeout(function () {
      animateClickerToggle("w" + k + "pic");
    }, 200);
  }
}

function animateClickerToggle(clicker) {
  cursor = document.getElementById(clicker);
  cursorList = cursor.classList;
  cursorList.toggle("smallCursor");
  cursorList.toggle("normalCursor");
}

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// BUYING BUFFS
function buyBuffBPC(buffName, buffPrice, buffPriceMultiplier, buffOwned) {
  if (bananas >= buffPrice) {
    // changing stats
    buffOwned++;
    document.getElementById(buffName + "Owned").innerHTML = buffOwned;
    // purchasing buff BPC
    bananas = bananas - buffPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;
    // updating buff price
    buffPrice = Math.round(buffPrice * buffPriceMultiplier);
    document.getElementById(buffName + "Price").innerHTML = buffPrice;
    updateBuffsPrices();
    // updating bpc
    clickRate = 1 + calcBPC();
    document.getElementById("bpc").innerHTML = clickRate;
    // finally checking prices
    tiersPricesChecks();
    buffsPricesChecks();
  } else {
    alert("Pas assez de bananes !");
  }
}

function buyBuffBPS(
  buffName,
  buffPrice,
  buffPriceMultiplier,
  buffOwned,
  buffMultiplier
) {
  console.log(buffName);
  console.log(buffPrice);
  console.log(buffPriceMultiplier);
  console.log(buffOwned);
  console.log(buffMultiplier);
  if (bananas >= buffPrice) {
    // changing stats
    buffOwned++;
    document.getElementById(buffName + "Owned").innerHTML = buffOwned;
    // purchasing buff BPS
    bananas = bananas - buffPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;
    // updating buff price
    buffPrice = Math.round(buffPrice * buffPriceMultiplier);
    document.getElementById(buffName + "Price").innerHTML = buffPrice;
    updateBuffsPrices();
    // changing bps ALERT NOT USABLE FOR ANY OTHER BUFF
    tierBuffedMultiplier = document.getElementById(
      step3Name + "Multiplier"
    ).innerHTML;
    tierBuffedMultiplier =
      parseInt(tierBuffedMultiplier, 10) * parseFloat(buffMultiplier, 10);
    step3Multiplier = Math.round(tierBuffedMultiplier);
    document.getElementById(step3Name + "Multiplier").innerHTML =
      step3Multiplier;
    // updating bps
    calcBPS();
    // finally checking prices
    tiersPricesChecks();
    buffsPricesChecks();
  } else {
    alert("Pas assez de bananes !");
  }
}

function updateBuffsPrices() {
  buffBPC1Price = document.getElementById("buffCursorPrice").innerHTML;
  buffBPC2Price = document.getElementById("buffMegaCursorPrice").innerHTML;
  buffBPS1Price = document.getElementById("buffCPUPrice").innerHTML;
}
