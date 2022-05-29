console.log(localStorage);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// MISC

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

let tiersArray = ["Clicker", "Tree", "Gorilla", "Macaque"];
let buffsBPCArray = ["Cursor", "MegaCursor"];
let buffsBPSArray = ["CPU"];

// NUMBER OF CLICKERS AND BUFFS (will be used later)
const nbTiers = document.querySelectorAll("#buyableTiers [id$=Button]");
const nbBuffs = document.querySelectorAll("#buyableBuffs [id$=Button]");

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// TIERS PRICES

// old and almost useless code I'll delete soon

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
function resetSave() {
  // reset doesn't work if it waits for confirmation, will fix it later
  // if (
  //   window.confirm(
  //     "ATTENTION : toutes les bananes seront perdues et les gorilles devront s'inscrire à Pôle Emploi. Vous en assumez les conséquences ?"
  //   )
  // ) {
  localStorage.clear();
  location.reload();
  // }
}

if (localStorage.getItem("savedState") != null) {
  loadAllSaved();
}

function saveTiers() {
  localStorage.setItem("savedState", true);
  for (let tier of tiersArray) {
    saveOneTier("tier" + tier);
  }
}

function saveOneTier(tierName) {
  let tierValue = document.getElementById(tierName + "Owned").innerHTML;
  localStorage.setItem(tierName + "Saved", tierValue);
}

function saveStats() {
  saveOneStat("nbClicks", "nbClicks");
  saveOneStat("bananasNumber", "bananas");
  saveOneStat("bps", "bps");
  saveOneStat("totalBananasNumber", "totalBananas");
  saveOneStat("restClicks", "restClicks");
}

function saveOneStat(htmlid, localstoragename) {
  let toSave = document.getElementById(htmlid).innerHTML;
  localStorage.setItem(localstoragename, toSave);
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
  for (let tier of tiersArray) {
    loadSavedTiers("tier" + tier);
  }
}

function loadSavedTiers(tierName) {
  let savedTier = localStorage.getItem(tierName + "Saved");
  document.getElementById(tierName + "Owned").innerHTML = savedTier;
  document.getElementById(tierName + "OwnedB").innerHTML = savedTier;
  document.getElementById(tierName + "OwnedC").innerHTML = savedTier;
}

function loadAllStats() {
  // don't know why the first call to loadOneStat doesn't work, I'll fix it later I guess
  bananas = parseInt(localStorage.getItem("bananas"), 10);
  document.getElementById("bananasNumber").innerHTML = bananas;
  // loadOneStat("bananas", "bananasNumber");
  loadOneStat("nbClicks", "nbClicks");
  loadOneStat("bps", "bps");
  loadOneStat("restClicks", "restClicks");
  let total = parseInt(localStorage.getItem("totalBananas"), 10);
  document.getElementById("totalBananasNumber").innerHTML = total;
  // loadOneStat("totalBananas", "totalBananasNumber");
}

function loadOneStat(localstoragename, htmlid) {
  toLoad = parseInt(localStorage.getItem(localstoragename), 10);
  document.getElementById(htmlid).innerHTML = toLoad;
}

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
  let nbclicks = parseInt(document.getElementById("nbClicks").innerHTML, 10);
  nbclicks++;
  restclicks--;
  document.getElementById("nbClicks").innerHTML = nbclicks;
  document.getElementById("restClicks").innerHTML = restclicks;
}

function updateBananas(toAdd) {
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );
  bananas = bananas + toAdd;
  document.getElementById("bananasNumber").innerHTML = bananas;
}

function updateTotalBananas(toAdd) {
  let totalBananas = parseInt(
    document.getElementById("totalBananasNumber").innerHTML,
    10
  );
  totalBananas = totalBananas + toAdd;
  document.getElementById("totalBananasNumber").innerHTML = totalBananas;
}

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CALC BPS AND BPC

function calcBPS() {
  prod = 0;

  for (let tier of tiersArray) {
    let tierOwned = document.getElementById("tier" + tier + "Owned").innerHTML;
    let tierMultiplier = document.getElementById(
      "tier" + tier + "Multiplier"
    ).innerHTML;
    prod = prod + calcBPSDetail(tierMultiplier, tierOwned);
  }

  document.getElementById("bps").innerHTML = prod;
  return prod;
}

function calcBPSDetail(multiplier, owned) {
  prod = multiplier * owned;
  return prod;
}

// TO REFACTOR
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
  for (let tier of tiersArray) {
    tierPriceCheck("tier" + tier);
  }
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
  for (let tier of tiersArray) {
    tierPriceCheck10("tier" + tier);
  }
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
  // step2Owned = document.getElementById(step2Name + "Owned").innerHTML;
  unavailable("tierGorillaOwned", buffBPS1Name);
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
  let tierClickerOwned = document.getElementById("tierClickerOwned").innerHTML;
  if (bananas >= 30 || tierClickerOwned >= 1) {
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
function buyTier(tierName) {
  // fetching initial data
  let tierMultiplier = document.getElementById(
    tierName + "Multiplier"
  ).innerHTML;
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
    // updateTiersPrices();

    // updating bps
    calcBPS();

    // finally checking prices
    showClicker();
    runAllChecks();
  } else {
    alert("Pas assez de bananes !");
  }
}

function buyTier10(tierName) {
  // calculating price x10
  let tierMultiplier = document.getElementById(
    tierName + "Multiplier"
  ).innerHTML;
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

// function updateTiersPrices() {
//   step1Price = document.getElementById("tierClickerPrice").innerHTML;
//   step2Price = document.getElementById("tierTreePrice").innerHTML;
//   step3Price = document.getElementById("tierGorillaPrice").innerHTML;
//   step4Price = document.getElementById("tierMacaquePrice").innerHTML;
// }

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
