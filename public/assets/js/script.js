////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// MISC

// displaying a fun little message
console.log(
  "Oui, il est possible de tricher assez facilement. Super, bonne ambiance vraiment."
);

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// DEFAULT VALUES AND GAMA INITIALIZATION

// I should delete these values and find another way to store them but it crashes if I do, so...
bananas = 0;
totalBananas = 0;
bps = 0;
bpc = 1;
clickRate = 1;
nbclicks = 0;
restclicks = 1000000;

// Array containing stuff you can buy, should be the only place where to intervene when adding stuff
const tiersArray = ["Clicker", "Tree", "Gorilla", "Macaque"];
const buffsBPCArray = ["Cursor", "MegaCursor"];
const buffsBPSArray = ["CPU"];

// NUMBER OF CLICKERS AND BUFFS (will be used later)
const nbTiers = document.querySelectorAll("#buyableTiers [id$=Button]");
const nbBuffs = document.querySelectorAll("#buyableBuffs [id$=Button]");

//
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

function saveBuffs() {
  localStorage.setItem("savedState", true);
  for (let buff of buffsBPCArray) {
    saveOneBuff("buff" + buff);
  }
  for (let buff of buffsBPSArray) {
    saveOneBuff("buff" + buff);
  }
}

function saveOneBuff(buffName) {
  let buffValue = document.getElementById(buffName + "Owned").innerHTML;
  localStorage.setItem(buffName + "Saved", buffValue);
}

function saveStats() {
  saveOneStat("nbClicks", "nbClicks");
  saveOneStat("bananasNumber", "bananas");
  saveOneStat("bps", "bps");
  saveOneStat("totalBananasNumber", "totalBananas");
  saveOneStat("restClicks", "restClicks");
  saveOneStat("bpc", "bpc");
}

function saveOneStat(htmlid, localstoragename) {
  let toSave = document.getElementById(htmlid).innerHTML;
  localStorage.setItem(localstoragename, toSave);
}

function saveToLocalStorage() {
  saveTiers();
  saveBuffs();
  saveStats();
}

function loadAllSaved() {
  loadAllSavedTiers();
  loadAllSavedBuffs();
  loadAllStats();
  runAllChecks();
  unavailableFirst();
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

function loadAllSavedBuffs() {
  for (let buff of buffsBPCArray) {
    loadSavedBuffs("buff" + buff);
  }
  for (let buff of buffsBPSArray) {
    loadSavedBuffs("buff" + buff);
  }
}

function loadSavedBuffs(buffName) {
  let savedBuff = localStorage.getItem(buffName + "Saved");
  document.getElementById(buffName + "Owned").innerHTML = savedBuff;
  document.getElementById(buffName + "OwnedB").innerHTML = savedBuff;
  document.getElementById(buffName + "OwnedC").innerHTML = savedBuff;
}

function loadAllStats() {
  // don't know why the first call to loadOneStat doesn't work, I'll fix it later I guess
  let bananas = parseInt(localStorage.getItem("bananas"), 10);
  document.getElementById("bananasNumber").innerHTML = bananas;
  // loadOneStat("bananas", "bananasNumber");
  loadOneStat("nbClicks", "nbClicks");
  loadOneStat("bps", "bps");
  loadOneStat("bpc", "bpc");
  loadOneStat("restClicks", "restClicks");
  // same issue here?
  let total = parseInt(localStorage.getItem("totalBananas"), 10);
  document.getElementById("totalBananasNumber").innerHTML = total;
  // loadOneStat("totalBananas", "totalBananasNumber");
}

function loadOneStat(localstoragename, htmlid) {
  let toLoad = parseInt(localStorage.getItem(localstoragename), 10);
  document.getElementById(htmlid).innerHTML = toLoad;
}

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// CHEATS (see cheatcode.js)

function cheat() {
  // adding bananas
  updateBananas(10000);
  updateTotalBananas(10000);

  // adding 50 clicks to total
  let nbclicks = parseInt(document.getElementById("nbClicks").innerHTML, 10);
  nbclicks = nbclicks + 50;
  document.getElementById("nbClicks").innerHTML = nbclicks;
  runAllChecks();

  // removing 50 clicks from rest
  let restclicks = parseInt(
    document.getElementById("restClicks").innerHTML,
    10
  );
  restclicks = restclicks - 50;
  document.getElementById("restClicks").innerHTML = restclicks;

  // displaying info
  console.log("+10k bananas");
}

let cheatCode = new cheatcode("b, a, n, a, n, a", () => {
  let cheat = document.getElementById("cheat");

  let cheatList = cheat.classList;
  cheatList.remove("unavailable");
  console.log("Cheat mode ACTIVATED");
});

cheatCode.start();

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// MAIN FUNCTIONS

var perSecondIntervel = setInterval(perSecond, 1000);

function clickUp() {
  let clickRate = calcBPC() + 1;
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
  showClicker();
}

function updateNbClicks() {
  let nbclicks = parseInt(document.getElementById("nbClicks").innerHTML, 10);
  nbclicks++;
  let restclicks = parseInt(
    document.getElementById("restClicks").innerHTML,
    10
  );
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
  let prod = 0;

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
  let prod = multiplier * owned;
  return prod;
}

function calcBPC() {
  let prod = 0;

  for (let buff of buffsBPCArray) {
    let buffOwned = document.getElementById("buff" + buff + "Owned").innerHTML;
    let buffMultiplier = document.getElementById(
      "buff" + buff + "Multiplier"
    ).innerHTML;
    prod = prod + calcBPCDetail(buffMultiplier, buffOwned);
  }

  return prod;
}

function calcBPCDetail(multiplier, owned) {
  let prod = multiplier * owned;
  return prod;
}

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHECKING PRICES AND GREYING OUT BUTTONS

// runs all checks (for greying out buttons)
function runAllChecks() {
  tiersPricesChecks();
  tiersPricesChecks10();
  buffsPricesChecks();
  unavailableCheck();
}

// runs individual checks
function tiersPricesChecks() {
  for (let tier of tiersArray) {
    tierPriceCheck("tier" + tier);
  }
}

// runs a specific check and greys out its related button
function tierPriceCheck(tierName) {
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );
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

// runs individual checks for x10 buttons
function tiersPricesChecks10() {
  for (let tier of tiersArray) {
    tierPriceCheck10("tier" + tier);
  }
}

// runs a specific check for x10 button and greys it out
function tierPriceCheck10(tierName) {
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );
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

function calcPrice10(price, priceMultiplier) {
  let price10 = 0;
  for (let m = 0; m < 10; m++) {
    price10 = price10 + price * priceMultiplier;
  }
  price10 = Math.round(price10);
  return price10;
}

function buffsPricesChecks() {
  for (let buff of buffsBPSArray) {
    buffPriceCheck("buff" + buff);
  }
  for (let buff of buffsBPCArray) {
    buffPriceCheck("buff" + buff);
  }
}

function buffPriceCheck(buffName) {
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );
  let buffPrice = document.getElementById(buffName + "Price").innerHTML;
  let buffNameButton = document.getElementById(buffName + "Button");
  let buffNameButtonList = buffNameButton.classList;

  // Graying out buttons
  if (buffPrice > bananas) {
    buffNameButton.disabled = true;
    buffNameButtonList.add("greyedBuff");
  } else {
    buffNameButton.disabled = false;
    buffNameButtonList.remove("greyedBuff");
  }
}

function unavailableCheck() {
  unavailable("tierGorillaOwned", "buffCPU");
  unavailableClicks("buffCursor", 100);
  unavailableClicks("buffMegaCursor", 500);
}

// hides everything until there are at least 30 clicks or 1 clicker owned
function unavailableFirst() {
  let tierClickerOwned = document.getElementById("tierClickerOwned").innerHTML;
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );

  if (bananas >= 30 || tierClickerOwned > 0) {
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
  let ownedThing = document.getElementById(owned).innerHTML;

  if (ownedThing > 0) {
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
  let nbclicks = document.getElementById("nbClicks").innerHTML;

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
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// BUYING TIERS AND BUFFS

function buyTier(tierName) {
  // fetching initial data
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );
  let tierMultiplier = document.getElementById(
    tierName + "Multiplier"
  ).innerHTML;
  let tierPrice = document.getElementById(tierName + "Price").innerHTML;
  let tierOwned = document.getElementById(tierName + "Owned").innerHTML;
  let tierPriceMultiplier = document.getElementById(
    tierName + "PriceMultiplier"
  ).innerHTML;

  // determining if able to buy tier
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
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );
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

function buyBuff(buffType, buffName, buffedTierName) {
  // fetching initial data
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );
  let buffMultiplier = document.getElementById(
    buffName + "Multiplier"
  ).innerHTML;
  let buffPrice = document.getElementById(buffName + "Price").innerHTML;
  let buffOwned = document.getElementById(buffName + "Owned").innerHTML;
  let buffPriceMultiplier = document.getElementById(
    buffName + "PriceMultiplier"
  ).innerHTML;
  let clickRate = document.getElementById("bpc").innerHTML;

  // determining if able to buy buff
  if (bananas >= buffPrice) {
    // updating owned number and stats
    buffOwned++;
    document.getElementById(buffName + "Owned").innerHTML = buffOwned;
    document.getElementById(buffName + "OwnedB").innerHTML = buffOwned;
    document.getElementById(buffName + "OwnedC").innerHTML = buffOwned;

    // purchasing buff
    bananas = bananas - buffPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;

    // updating buff price
    buffPrice = Math.round(buffPrice * buffPriceMultiplier);
    document.getElementById(buffName + "Price").innerHTML = buffPrice;

    if (buffType == "BPC") {
      // updating bpc
      clickRate = 1 + calcBPC();
      document.getElementById("bpc").innerHTML = clickRate;
    }

    if (buffType == "BPS") {
      // getting buffed tier multiplier
      buffedTierMultiplier = document.getElementById(
        buffedTierName + "Multiplier"
      ).innerHTML;
      // calculating change
      buffedTierMultiplier = Math.round(
        parseInt(buffedTierMultiplier, 10) * parseFloat(buffMultiplier, 10)
      );
      // puting it back
      document.getElementById(buffedTierName + "Multiplier").innerHTML =
        buffedTierMultiplier;

      // updating bps
      calcBPS();
    }

    // finally checking prices
    runAllChecks();
  } else {
    alert("Pas assez de bananes !");
  }
}

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CURSORPOINTERS ANIMATION

// loading cursors on load if they exist
window.onload = showClicker();

// adding clickers
function showClicker() {
  let clickerNb = parseInt(
    document.getElementById("tierClickerOwned").innerHTML,
    10
  );

  // adding visual clickers
  for (let i = 1; i <= clickerNb; i++) {
    let warpName = "w" + i;
    let warpGot = document.getElementById(warpName);
    let warpGotList = warpGot.classList;
    warpGotList.remove("unavailable");
  }

  // showing a little explanation as to why there are no more new clickers displayed
  if (clickerNb > 18) {
    let enoughClickers = document.getElementById("enoughClickers");
    let enoughClickersList = enoughClickers.classList;
    enoughClickersList.remove("unavailable");
  }
}

// animating all clickers
function animateClicker() {
  for (let k = 1; k <= 18; k++) {
    animateClickerToggle("w" + k + "pic");
    setTimeout(function () {
      animateClickerToggle("w" + k + "pic");
    }, 200);
  }
}

// animating one clicker
function animateClickerToggle(clicker) {
  let cursor = document.getElementById(clicker);
  let cursorList = cursor.classList;
  cursorList.toggle("smallCursor");
  cursorList.toggle("normalCursor");
}
