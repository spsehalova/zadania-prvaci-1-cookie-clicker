// script.js
const cookieCountElement =
  document.getElementById('cookie-count')

const cookiesPerClickElement
  = document.getElementById('cookies-per-click')

var cookieCount = 100;
var upgradeCost = 5;
var multiplier = 1;

function getCookie() {
  cookieCount += multiplier;

  cookieCountElement.innerHTML = cookieCount;
}

function upgrade() {
  if (cookieCount >= upgradeCost) {
    cookieCount -= upgradeCost;
    multiplier += 1

    cookiesPerClickElement.innerHTML = multiplier;
    cookieCountElement.innerHTML = cookieCount;
  }
}

var minerCost = 60;
var minerCount = 0;

const minerCountElement
  = document.getElementById('miners-count')

function buyMiner() {
  if (cookieCount >= minerCost) {
    cookieCount -= minerCost;
    minerCount++;

    minerCost = minerCost * 1.5;

    minerCountElement.innerHTML = minerCount;
    cookieCountElement.innerHTML = cookieCount;
  }
}

var miningProgress = 0;
const miningProgressBar = document.getElementById('mining-progress-bar')

function update() {
  setTimeout(() => {
    update()
  }, 10)

  if (minerCount > 0) {
    miningProgress++;
    miningProgressBar.value = miningProgress;

    if (miningProgress >= 100) {
      miningProgress = 0;
      cookieCount += (minerCount * multiplier);

      cookieCountElement.innerHTML = cookieCount;
    }
  }
}
update()

