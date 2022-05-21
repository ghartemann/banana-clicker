/////////// DEFAULT VALUES
bps = 0;
clickRate = 1;

/////////// STEP PRICES
// Clicker
step1Name = "tierClicker";
step1Owned = 0;
step1Price = 30;
step1Multiplier = 1;
step1PriceMultiplier = 1.6;
document.getElementById(step1Name + "Price").innerHTML = step1Price;
document.getElementById(step1Name + "Multiplier").innerHTML = step1Multiplier;
// Gorilla
step2Name = "tierGorilla";
step2Owned = 0;
step2Price = 500;
step2Multiplier = 10;
step2PriceMultiplier = 1.6;
document.getElementById(step2Name + "Price").innerHTML = step2Price;
document.getElementById(step2Name + "Multiplier").innerHTML = step2Multiplier;
// Bananier
step3Name = "tierTree";
step3Owned = document.getElementById(step3Name + "Owned").innerHTML;
step3Price = 1400;
step3Multiplier = 80;
step3PriceMultiplier = 1.5;
document.getElementById(step3Name + "Price").innerHTML = step3Price;
document.getElementById(step3Name + "Multiplier").innerHTML = step3Multiplier;

/////////// BUFF PRICES
// Cursor
buff1Name = "buffCursor";
buff1Owned = 0;
buff1Price = 100;
buff1Multiplier = 1;
buff1PriceMultiplier = 1.31;
document.getElementById(buff1Name + "Price").innerHTML = buff1Price;
document.getElementById(buff1Name + "Multiplier").innerHTML = buff1Multiplier;
// CPU
buff2Name = "buffCPU";
buff2Owned = 0;
buff2Price = 3333;
buff2Multiplier = 3;
buff2PriceMultiplier = 1.64;
document.getElementById(buff2Name + "Price").innerHTML = buff2Price;
document.getElementById(buff2Name + "Multiplier").innerHTML = buff2Multiplier;

//////////////////////////////////////////////////////////////////////////////////////////

////////// SAVING AND FETCHING DATA
if (localStorage.getItem("numberBananas") === null) {
  var bananas;
  bananas = 0;
} else {
  var bananas = Number(localStorage.numberBananas);
  document.getElementById("cookies").innerHTML = clicks;
}

// setting interval and data
var perSecondIntervel = setInterval(perSecond, 1000);

function cheat() {
  bananas = bananas + 1000;
  document.getElementById("bananasNumber").innerHTML = bananas;
  tiersPricesChecks();
  buffsPricesChecks();
  bps = calcBPS();
  document.getElementById("bps").innerHTML = bps;
}

function clickUp() {
  bananas = bananas + clickRate;
  document.getElementById("bananasNumber").innerHTML = bananas;
  tiersPricesChecks();
  buffsPricesChecks();
  bps = calcBPS();
  document.getElementById("bps").innerHTML = bps;
}

function perSecond() {
  bananas = bananas + bps;
  document.getElementById("bananasNumber").innerHTML = bananas;
  tiersPricesChecks();
  buffsPricesChecks();
  bps = calcBPS();
  document.getElementById("bps").innerHTML = bps;
}

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
  return prod;
}

function calcBPC() {}

// CHECKING PRICES AND GREYING OUT BUTTONS
function tiersPricesChecks() {
  tierPriceCheck(step1Name, step1Price);
  tierPriceCheck(step2Name, step2Price);
  tierPriceCheck(step3Name, step3Price);
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
  buffPriceCheck(buff1Name, buff1Price);
  buffPriceCheck(buff2Name, buff2Price);
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
    tierProd = tierOwned * tierMultiplier;
    document.getElementById(tierName + "Prod").innerHTML = tierProd;
    // updating bananas
    bananas = bananas - tierPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;
    // updating tier price
    tierPrice = Math.round(tierPrice * tierPriceMultiplier);
    document.getElementById(tierName + "Price").innerHTML = tierPrice;
    updateTiersPrices();
    // updating bps
    bps = calcBPS();
    document.getElementById("bps").innerHTML = bps;
    // finally checking prices
  } else {
    alert("Pas assez de bananes !");
  }
}

function updateTiersPrices() {
  step1Price = document.getElementById("tierClickerPrice").innerHTML;
  step2Price = document.getElementById("tierGorillaPrice").innerHTML;
  step3Price = document.getElementById("tierTreePrice").innerHTML;
}

////////// BUYING BUFFS
function buyBuffBPC(
  buffName,
  buffPrice,
  buffPriceMultiplier,
  buffOwned,
  buffMultiplier
) {
  if (bananas >= buffPrice) {
    // changing stats
    buffOwned++;
    document.getElementById(buffName + "Owned").innerHTML = buffOwned;
    buffProd = buffOwned * buffMultiplier;
    document.getElementById(buffName + "Prod").innerHTML = buffProd;
    // purchasing buff BPC
    bananas = bananas - buffPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;
    // updating buff price
    buffPrice = math.round(buffPrice * buffPriceMultiplier);
    document.getElementById(buffName + "Price").innerHTML = buffPrice;
    updateBuffsPrices();
    // updating bpc
    clickRate = clickRate + buffMultiplier;
    document.getElementById("bpc").innerHTML = clickRate;
    // finally checking prices
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
  buffMultiplier,
  tierBuffedMultiplier
) {
  if (bananas >= buffPrice) {
    // changing stats
    buffOwned++;
    /* document.getElementById(buffName + "Owned").innerHTML = buffOwned;
    buffProd = buffOwned * buffMultiplier;
    document.getElementById(buffName + "Prod").innerHTML = buffProd; */
    // purchasing buff BPS
    bananas = bananas - buffPrice;
    document.getElementById("bananasNumber").innerHTML = bananas;
    // updating buff price
    buffPrice = math.round(buffPrice * buffPriceMultiplier);
    document.getElementById(buffName + "Price").innerHTML = buffPrice;
    updateBuffsPrices();
    // changing bps
    tierBuffedMultiplier = tierBuffedMultiplier + buffMultiplier;
    step2Multiplier = tierBuffedMultiplier;
    // updating bps
    persecond = calcBPS(tierMultiplier, tierOwned);
    document.getElementById("bps").innerHTML = persecond;
    // finally checking prices
    buffsPricesChecks();
  } else {
    alert("Pas assez de bananes !");
  }
}

function updateBuffsPrices() {
  buff1Price = document.getElementById("buffCursorPrice").innerHTML;
  buff2Price = document.getElementById("buffCPUPrice").innerHTML;
}
