////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// MISC

// ask user if they're sure they actually want to quit, which is understandable but also a bit sad
/* window.addEventListener("beforeunload", (event) => {
  event.returnValue = `Are you sure you want to leave?`;
}); */

// displaying a fun little message
console.log(
  "Oui, je pense qu'il est possible de tricher assez facilement. Mais vous ne voudriez pas faire ça, hein ?"
);

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// PATCHNOTE AND ROADMAP
document.getElementById("version").innerHTML = "v0.8.0";

function patchNote() {
  alert(
    "CHANGELOG\n\nv0.8.0\n* Gros changements d'organisation visuelle\n* Des tooltips informent maintenant de l'action des clickers (ceux des buffs suivront)\n\nv0.7.3\n* Animation des curseurs quand ils cliquent\n* Encore plus responsive\n\nv0.7.0\n* Responsive™\n* Ajout d'animations sur les boutons\n* Nombreux fixes de CSS\n\nv0.6.6\n* Ajout du macaque\n\nv0.6.5\n* Beaucoup, beaucoup d'améliorations du CSS, maintenant un peu plus responsive\n\nv0.6.0\n* Ajout de curseurs visuels à l'achat d'un clicker (assez fier du résultat)\n\nv0.5.1\n* Ajout du méga curseur (1000 clics)\n* Refactorisation et nombreux fixes\n\nv0.5.0\n* Migration vers PHP (simple MVC)\n* Améliorations visuelles en masse\n\nv0.4.0\n* Ajout des buffs\n* Ajout du calcul de bpc\n\nv0.3.0\n* Ajout des gorilles\n* Ajout des bananiers\n\nv0.2.1\n* Calcul du bps pleinement fonctionnel"
  );
}

function roadMap() {
  alert(
    "ROADMAP\n\n* Ajout de nombreux autres clickers et buffs\n* Migration sous Symfony\n* Ajout d'une fonctionnalités achievements (inutiles mais ça fait toujours plaisir)\n* Sauvegarde des données (l'actualisation réinitialise la partie actuellement)\n* Export et import de sauvegardes\n* Rendre cette fenêtre jolie (sans utiliser une alert par exemple)\n* Devenir millionnaire grâce à la publicité"
  );
}

function unreleased() {
  alert(
    "Cette fonctionnalité n'est pas disponible pour le moment (elle serait pourtant diablement utile)"
  );
}

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// DEFAULT VALUES
bananas = 0;
totalBananas = 0;
bps = 0;
bpc = 1;
clickRate = 1;
nbclicks = 0;
restclicks = 1000000;

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// TIERS PRICES

// Clicker
step1Name = "tierClicker";
step1Owned = document.getElementById("tierClickerOwned").innerHTML;
step1Price = document.getElementById("tierClickerPrice").innerHTML;
step1Multiplier = document.getElementById("tierClickerMultiplier").innerHTML;
step1PriceMultiplier = document.getElementById(
  "tierClickerPriceMultiplier"
).innerHTML;

// Bananier
step2Name = "tierTree";
step2Owned = document.getElementById("tierTreeOwned").innerHTML;
step2Price = document.getElementById("tierTreePrice").innerHTML;
step2Multiplier = document.getElementById("tierTreeMultiplier").innerHTML;
step2PriceMultiplier = document.getElementById(
  "tierTreePriceMultiplier"
).innerHTML;

// Gorilla
step3Name = "tierGorilla";
step3Owned = document.getElementById("tierGorillaOwned").innerHTML;
step3Price = document.getElementById("tierGorillaPrice").innerHTML;
step3Multiplier = document.getElementById("tierGorillaMultiplier").innerHTML;
step3PriceMultiplier = document.getElementById(
  "tierGorillaPriceMultiplier"
).innerHTML;

// Macaque
step4Name = "tierMacaque";
step4Owned = document.getElementById("tierMacaqueOwned").innerHTML;
step4Price = document.getElementById("tierMacaquePrice").innerHTML;
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// CHEATS

function cheat() {
  updateBananas(10000);
  updateTotalBananas(10000);
  nbclicks = nbclicks + 50;
  document.getElementById("nbClicks").innerHTML = nbclicks;
  runAllChecks();
}

let cheatCode = new cheatcode("b, a, n, a, n, a", () => {
  let cheat = document.getElementById("cheat");
  console.log(cheat);
  let cheatList = cheat.classList;
  cheatList.remove("unavailable");
});

cheatCode.start();

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  updateBananas(bps);
  updateTotalBananas(bps);
  runAllChecks();
  animateClicker();
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CALC BPS AND BPC
function calcBPSDetail(multiplier, owned) {
  prod = multiplier * owned;
  return prod;
}

function calcBPS() {
  step1Owned = document.getElementById(step1Name + "Owned").innerHTML;
  prod = calcBPSDetail(step1Multiplier, step1Owned);
  step2Owned = document.getElementById(step2Name + "Owned").innerHTML;
  prod = prod + calcBPSDetail(step2Multiplier, step2Owned);
  step3Owned = document.getElementById(step3Name + "Owned").innerHTML;
  prod = prod + calcBPSDetail(step3Multiplier, step3Owned);
  step4Owned = document.getElementById(step4Name + "Owned").innerHTML;
  prod = prod + calcBPSDetail(step4Multiplier, step4Owned);
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHECKING PRICES AND GREYING OUT BUTTONS
function runAllChecks() {
  tiersPricesChecks();
  buffsPricesChecks();
  unavailableCheck();
}

function tiersPricesChecks() {
  tierPriceCheck(step1Name, step1Price);
  tierPriceCheck(step2Name, step2Price);
  tierPriceCheck(step3Name, step3Price);
  tierPriceCheck(step4Name, step4Price);
}

function tierPriceCheck(tierName, tierPrice) {
  // Graying out prices
  if (tierPrice > bananas) {
    tierNameButton = document.getElementById(tierName + "Button");
    tierNameButton.disabled = true;
    const tierNameButtonList = tierNameButton.classList;
    tierNameButtonList.add("greyed");
  } else {
    tierNameButton = document.getElementById(tierName + "Button");
    tierNameButton.disabled = false;
    const tierNameButtonList = tierNameButton.classList;
    tierNameButtonList.remove("greyed");
  }
}

function buffsPricesChecks() {
  buffPriceCheck(buffBPC1Name, buffBPC1Price);
  buffPriceCheck(buffBPC2Name, buffBPC2Price);
  buffPriceCheck(buffBPS1Name, buffBPS1Price);
}

function buffPriceCheck(buffName, buffPrice) {
  if (buffPrice > bananas) {
    buffNameButton = document.getElementById(buffName + "Button");
    buffNameButton.disabled = true;
    const buffNameButtonList = buffNameButton.classList;
    buffNameButtonList.add("greyedBuff");
  } else {
    buffNameButton = document.getElementById(buffName + "Button");
    buffNameButton.disabled = false;
    const buffNameButtonList = buffNameButton.classList;
    buffNameButtonList.remove("greyedBuff");
  }
}

function unavailableCheck() {
  step2Owned = document.getElementById(step2Name + "Owned").innerHTML;
  unavailable(step3Owned, buffBPS1Name);
  unavailableClicks(buffBPC1Name, 100);
  unavailableClicks(buffBPC2Name, 500);
}

function unavailableFirst() {
  if (nbclicks >= 30) {
    notAvailable = document.getElementById("buyableTiers");
    const notAvailableList = notAvailable.classList;
    notAvailableList.remove("unavailable");
    // removing small paragraph
    nothingTiers = document.getElementById("nothingTiers");
    const nothingTiersList = nothingTiers.classList;
    nothingTiersList.add("unavailable");
  }
}

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// BUYING TIERS
function buyTier(
  tierName,
  tierPrice,
  tierPriceMultiplier,
  tierOwned,
  tierMultiplier
) {
  if (bananas >= tierPrice) {
    // updating owned number and stats
    tierOwned++;
    document.getElementById(tierName + "Owned").innerHTML = tierOwned;
    document.getElementById(tierName + "OwnedB").innerHTML = tierOwned;
    document.getElementById(tierName + "OwnedC").innerHTML = tierOwned;
    tierProd = tierOwned * tierMultiplier;
    document.getElementById(tierName + "Prod").innerHTML = tierProd;
    document.getElementById(tierName + "ProdB").innerHTML = tierProd;

    // updating bananas
    bananas = bananas - tierPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;

    // updating tier price
    tierPriceMultiplier = document.getElementById(
      tierName + "PriceMultiplier"
    ).innerHTML;
    tierPrice = Math.round(tierPrice * tierPriceMultiplier);
    document.getElementById(tierName + "Price").innerHTML = tierPrice;
    updateTiersPrices();

    /* updating tier price multiplier
    tierPriceMultiplier = tierPriceMultiplier * 0.999;
    document.getElementById(tierName + "PriceMultiplier").innerHTML =
      tierPriceMultiplier;
    console.log(tierPriceMultiplier);*/

    // updating bps
    bps = calcBPS();
    document.getElementById("bps").innerHTML = bps;

    // finally checking prices
    tiersPricesChecks();
    buffsPricesChecks();
    showClicker();
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

function showClicker() {
  clickerNb = document.getElementById("tierClickerOwned").innerHTML;
  clickerNb = parseInt(clickerNb, 10);
  clickerNb = clickerNb - 1;

  // adding visual clickers
  for (let j = 0; j < 18; j++) {
    warpName = "w" + j;
    warpGot = document.getElementById(warpName);

    if (clickerNb == warpGot.id.substring(1)) {
      const warpGotList = warpGot.classList;
      warpGotList.remove("unavailable");
    }
  }

  /*
  // showing a little explanation as to why there are no more new clickers displayed
  if (clickerNb > 17) {
    enoughClickers = document.getElementById("enoughClickers");
    const enoughClickersList = enoughClickers.classList;
    enoughClickersList.remove("unavailable");
  } */
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    bps = calcBPS();
    document.getElementById("bps").innerHTML = bps;
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

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// SAVE FUNCTION
