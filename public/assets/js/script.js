////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// MISC

// displaying a fun little message
console.log(
  "Oui, il est possible de tricher assez facilement. Super, bonne ambiance vraiment."
);

document.getElementById("version").innerHTML = "v0.9.4";

function unreleased() {
  alert("Le jeu sauvegarde maintenant tout seul, à chaque seconde.");
}

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// DEFAULT VALUES AND GAME INITIALIZATION

// I should delete these values and find another way to store them,
// or at least add "let" in front of them but then it crashes if I do, so...
bananas = 0;
totalBananas = 0;
bps = 0;
bpc = 1;
clickRate = 1;
nbclicks = 0;
restclicks = 1000000;

// Arrays containing stuff to buy, should be the only place where to intervene when adding stuff
// array containg tiers names
const tiersArray = [
  "Clicker",
  "Tree",
  "Macaque",
  "Gorilla",
  "Ad",
  "Toucan",
  "Sloth",
  "Plantation",
  "Rifle",
  "Boat",
  "Plane",
  "Wormhole",
];

// arrays containing buffs names by category (bps/bpc)
const buffsBPCArray = ["Cursor", "MegaCursor", "SolidCursor"];
const buffsBPSArray = [
  "Fertilizer",
  "Motorcycle",
  "CPU",
  "Bulldozer",
  "Gag",
  "Megaphone",
  "Laser",
  "Iceberg",
  "Adblock",
];

// arrays containing buffs unlocking modalities :
// [buff, modifiedTier] -- will get unlocked after 5 owned tiers
const buffsBPSArrayModality = [
  ["Fertilizer", "Tree"],
  ["Motorcycle", "Macaque"],
  ["CPU", "Gorilla"],
  ["Bulldozer", "Plantation"],
  ["Gag", "Toucan"],
  ["Megaphone", "Sloth"],
  ["Laser", "Rifle"],
  ["Iceberg", "Boat"],
  ["Ad", "Clicker"],
  ["Adblock", "Ad"],
];

// [buff, nbClicksNeeded]
const buffsBPCArrayModality = [
  ["Cursor", 100],
  ["MegaCursor", 500],
  ["SolidCursor", 1000],
];

// NUMBER OF CLICKERS AND BUFFS (will probably be used later)
const nbTiers = document.querySelectorAll("#buyableTiers [id$=Button]");
const nbBuffs = document.querySelectorAll("#buyableBuffs [id$=Button]");

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// SAVE FUNCTION

// reset doesn't work if it waits for confirmation, will fix it later
function resetSave() {
  // if (
  //   window.confirm(
  //     "ATTENTION : toutes les bananes seront perdues et les gorilles devront s'inscrire à Pôle Emploi. Vous en assumez les conséquences ?"
  //   )
  // ) {
  localStorage.clear();
  // setTimeout(function () {
  //   localStorage.clear();
  // }, 2000);
  location.reload();
  // }
}

function saveTiers() {
  localStorage.setItem("savedState", true);
  for (let tier of tiersArray) {
    saveOneTier("tier" + tier);
  }
}

function saveOneTier(tierName) {
  let tierOwned = document.getElementById(tierName + "Owned").innerHTML;
  localStorage.setItem(tierName + "Saved", tierOwned);
  let tierPrice = document.getElementById(tierName + "Price").innerHTML;
  localStorage.setItem(tierName + "Price", tierPrice);
  let tierMultiplier = document.getElementById(
    tierName + "Multiplier"
  ).innerHTML;
  localStorage.setItem(tierName + "Multiplier", tierMultiplier);

  if (tierOwned > 0) {
    let tierProd = document.getElementById(tierName + "Prod").innerHTML;
    localStorage.setItem(tierName + "Prod", tierProd);
  }
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
  let buffOwned = document.getElementById(buffName + "Owned").innerHTML;
  localStorage.setItem(buffName + "Saved", buffOwned);
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

// load everything at startup
if (localStorage.getItem("savedState") != null) {
  loadAllSaved();
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

  if (savedTier > 0) {
    let tierProd = localStorage.getItem(tierName + "Prod");
    document.getElementById(tierName + "Prod").innerHTML = tierProd;
    document.getElementById(tierName + "ProdB").innerHTML = tierProd;
  }

  let savedPrice = localStorage.getItem(tierName + "Price");
  document.getElementById(tierName + "Price").innerHTML = savedPrice;

  let savedMultiplier = localStorage.getItem(tierName + "Multiplier");
  document.getElementById(tierName + "Multiplier").innerHTML = savedMultiplier;
  document.getElementById(tierName + "MultiplierB").innerHTML = savedMultiplier;
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
  updateBananas(1000000);
  updateTotalBananas(1000000);

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
  unavailableFirst();
  runAllChecks();
}

function perSecond() {
  let bps = calcBPS();
  updateBananas(bps);
  updateTotalBananas(bps);
  showClicker();
  animateClicker();
  unavailableFirst();
  runAllChecks();
  saveToLocalStorage();
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
    prod = prod + calcDetail(tierMultiplier, tierOwned);
  }

  document.getElementById("bps").innerHTML = prod;
  return prod;
}

function calcBPC() {
  let prod = 0;

  for (let buff of buffsBPCArray) {
    let buffOwned = document.getElementById("buff" + buff + "Owned").innerHTML;
    let buffMultiplier = document.getElementById(
      "buff" + buff + "Multiplier"
    ).innerHTML;
    prod = prod + calcDetail(buffMultiplier, buffOwned);
  }

  return prod;
}

function calcDetail(multiplier, owned) {
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

// calculating base price x10 or checking purposes
function calcPrice10(price, priceMultiplier) {
  let price10 = 0;
  for (let m = 0; m < 10; m++) {
    price10 = price10 + price * priceMultiplier;
  }
  return Math.round(price10);
}

// checking all buffs prices
function buffsPricesChecks() {
  for (let buffBPS of buffsBPSArray) {
    buffPriceCheck("buff" + buffBPS);
  }
  for (let buffBPC of buffsBPCArray) {
    buffPriceCheck("buff" + buffBPC);
  }
}

// checking buffs prices and greying out related buttons
function buffPriceCheck(buffName) {
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );
  let buffPrice = document.getElementById(buffName + "Price").innerHTML;
  let buffNameButton = document.getElementById(buffName + "Button");
  let buffNameButtonList = buffNameButton.classList;
  let buffOwned = document.getElementById(buffName + "Owned").innerHTML;

  // greying out buttons (except adblock)
  if (buffNameButton != document.getElementById("buffAdblockButton")) {
    if (buffPrice < bananas && buffOwned < 10) {
      buffNameButton.disabled = false;
      buffNameButtonList.remove("greyedBuff");
    } else {
      buffNameButton.disabled = true;
      buffNameButtonList.add("greyedBuff");
    }

    if (buffOwned >= 10) {
      document.getElementById(buffName + "OwnedC").innerHTML = "MAX";
      // document.getElementById(buffName + "Button").classList.add("lastBuff");
    }
  }

  // very specific case (adblock)
  if (buffNameButton == document.getElementById("buffAdblockButton")) {
    if (buffPrice < bananas && buffOwned < 1) {
      buffNameButton.disabled = false;
      buffNameButtonList.remove("greyedBuff");
    } else {
      buffNameButton.disabled = true;
      buffNameButtonList.add("greyedBuff");
    }

    if (document.getElementById("buffAdblockOwned").innerHTML >= 1) {
      document.getElementById("buffAdblockOwnedC").innerHTML = "MAX";
    }
  }
}

function unavailableCheck() {
  for (let buffBPSModality of buffsBPSArrayModality) {
    unavailable(
      "tier" + buffBPSModality[1] + "Owned",
      "buff" + buffBPSModality[0]
    );
  }
  for (let buffBPCModality of buffsBPCArrayModality) {
    unavailableClicks("buff" + buffBPCModality[0], buffBPCModality[1]);
  }
}

// hides everything until there are at least 30 clicks or 1 clicker owned
function unavailableFirst() {
  let tierClickerOwned = document.getElementById("tierClickerOwned").innerHTML;
  let bananas = parseInt(
    document.getElementById("bananasNumber").innerHTML,
    10
  );

  if (bananas >= 30 || tierClickerOwned > 0) {
    let clickerButtonGroup = document.getElementById("tierClickerButtonGroup");
    let clickerButtonGroupList = clickerButtonGroup.classList;
    clickerButtonGroupList.remove("unavailable");
    let notAvailable = document.getElementById("buyableTiers");
    let notAvailableList = notAvailable.classList;
    notAvailableList.remove("unavailable");
    // removing small paragraph
    let nothingTiers = document.getElementById("nothingTiers");
    const nothingTiersList = nothingTiers.classList;
    nothingTiersList.add("unavailable");
  }
}

// hides unavailable things (parameters : clicker, thing you wanna buy that depends from clicker ownership)
function unavailable(owned, notOwned) {
  let ownedThing = document.getElementById(owned).innerHTML;

  if (ownedThing >= 5) {
    let notOwnedThing = document.getElementById(notOwned + "Div");
    let notOwnedList = notOwnedThing.classList;
    notOwnedList.remove("unavailable");
    // removing small paragraph
    let nothing = document.getElementById("nothing");
    let nothingList = nothing.classList;
    nothingList.add("unavailable");
  }
}

// hides unavailable things (parameters : thing you wanna buy, nb of clicks there has to be to unlock it)
function unavailableClicks(notOwned, clicksToMake) {
  let nbclicks = document.getElementById("nbClicks").innerHTML;

  if (nbclicks >= clicksToMake) {
    let notOwnedThing = document.getElementById(notOwned + "Div");
    let notOwnedList = notOwnedThing.classList;
    notOwnedList.remove("unavailable");
    // removing small paragraph
    let nothing = document.getElementById("nothing");
    let nothingList = nothing.classList;
    nothingList.add("unavailable");
  }
}

function unavailableUntilBought() {
  for (let x = 0; x < tiersArray.length - 1; x++) {
    unavailableUntilBoughtDetail(
      "tier" + tiersArray[x],
      "tier" + tiersArray[x + 1]
    );
  }
}

function unavailableUntilBoughtDetail(owned, notOwned) {
  let ownedTier = document.getElementById(owned + "Owned").innerHTML;
  let notOwnedTier = document.getElementById(notOwned + "ButtonGroup");
  let notOwnedList = notOwnedTier.classList;

  if (ownedTier >= 1) {
    notOwnedList.remove("unavailable");
  }
}

window.onload = unavailableUntilBought();
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
    // updating bananas
    bananas = bananas - tierPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;

    // updating owned number and stats
    tierOwned++;
    document.getElementById(tierName + "Owned").innerHTML = tierOwned;
    document.getElementById(tierName + "OwnedB").innerHTML = tierOwned;
    document.getElementById(tierName + "OwnedC").innerHTML = tierOwned;
    let tierProd = tierOwned * tierMultiplier;
    document.getElementById(tierName + "Prod").innerHTML = tierProd;
    document.getElementById(tierName + "ProdB").innerHTML = tierProd;

    // updating tier price
    tierPrice = Math.round(tierPrice * tierPriceMultiplier);
    document.getElementById(tierName + "Price").innerHTML = tierPrice;

    // updating bps
    calcBPS();

    // finally checking prices
    showClicker();
    runAllChecks();
    unavailableUntilBought();
    showBanners();
    hideBanners();
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
  let tierPrice = document.getElementById(tierName + "Price").innerHTML;
  let tierPriceMultiplier = document.getElementById(
    tierName + "PriceMultiplier"
  ).innerHTML;

  let tierPrice10 = calcPrice10(tierPrice, tierPriceMultiplier);
  document.getElementById(tierName + "Price10").innerHTML = tierPrice10;

  if (tierPrice10 < bananas) {
    for (let l = 0; l < 10; l++) {
      buyTier(tierName);
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
    // purchasing buff
    bananas = bananas - buffPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;

    // updating owned number and stats
    buffOwned++;
    document.getElementById(buffName + "Owned").innerHTML = buffOwned;
    document.getElementById(buffName + "OwnedB").innerHTML = buffOwned;
    document.getElementById(buffName + "OwnedC").innerHTML = buffOwned;

    // updating buff price
    buffPrice = Math.round(buffPrice * buffPriceMultiplier);
    document.getElementById(buffName + "Price").innerHTML = buffPrice;

    if (buffType == "BPC") {
      // updating bpc
      clickRate = 1 + calcBPC();
      document.getElementById("bpc").innerHTML = clickRate;
    }

    if (buffType == "BPS") {
      // getting buffed tier multiplier and prod
      let buffedTierMultiplier = document.getElementById(
        buffedTierName + "Multiplier"
      ).innerHTML;
      let buffedTierProd = document.getElementById(
        buffedTierName + "Prod"
      ).innerHTML;
      let buffedTierOwned = document.getElementById(
        buffedTierName + "Owned"
      ).innerHTML;

      // calculating change for multiplier and prod
      buffedTierMultiplier = Math.round(
        parseInt(buffedTierMultiplier, 10) * parseFloat(buffMultiplier, 10)
      );
      buffedTierProd =
        parseInt(buffedTierMultiplier, 10) * parseInt(buffedTierOwned, 10);

      // putting values back
      document.getElementById(buffedTierName + "Multiplier").innerHTML =
        buffedTierMultiplier;
      document.getElementById(buffedTierName + "MultiplierB").innerHTML =
        buffedTierMultiplier;
      document.getElementById(buffedTierName + "Prod").innerHTML =
        buffedTierProd;
      document.getElementById(buffedTierName + "ProdB").innerHTML =
        buffedTierProd;

      // updating bps
      calcBPS();
    }

    // finally checking prices
    hideBanners();
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

  let increment = clickerNb;
  if (increment > 18) {
    increment = 18;
  }

  // adding visual clickers
  for (let i = 1; i <= increment; i++) {
    let warpName = "w" + i;
    let warpGot = document.getElementById(warpName);
    let warpGotList = warpGot.classList;
    warpGotList.remove("unavailable");
  }

  // showing a little explanation as to why there are no more new clickers displayed
  if (clickerNb > 18) {
    let enoughClickers = document.getElementById("enoughClickerstierClicker");
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

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AD BANNERS

function showBanners() {
  let tierAdOwned = document.getElementById("tierAdOwned").innerHTML;

  let banner1 = document.getElementById("banner1");
  let banner2 = document.getElementById("banner2");
  let banner3 = document.getElementById("banner3");

  if (tierAdOwned >= 1) {
    banner1.classList.remove("unavailable");
  }

  if (tierAdOwned >= 2) {
    banner2.classList.remove("unavailable");
  }

  if (tierAdOwned >= 3) {
    banner3.classList.remove("unavailable");
  }
}

function hideBanners() {
  let buffAdblockOwned = document.getElementById("buffAdblockOwned").innerHTML;
  let tierAdButton = document.getElementById("tierAdButton");

  if (buffAdblockOwned > 0) {
    banner1.classList.add("unavailable");
    banner2.classList.add("unavailable");
    banner3.classList.add("unavailable");
    document.getElementById("tierAdPrice").innerHTML = 0;
    // next two lines don't work for now
    tierAdButton.disabled = true;
    tierAdButton.classList.add("greyed");
  }
}

window.onload = showBanners();
window.onload = hideBanners();
