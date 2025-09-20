// script.js

const cookieCountElement = document.getElementById('cookie-count')
const getCookieButton = document.getElementById('get-cookie-button')
const cookiesPerClick = document.getElementById('cookies-per-click')
const minersCountElement = document.getElementById('miners-count')

var cookieCount = 100;
var addingCount = 1;
var minersCount = 0;

getCookieButton.addEventListener('click', () => {
  cookieCount += addingCount;
  render()
})

function upgrade() {
  if (cookieCount >= 10) {
    addingCount++;
    cookieCount -= 10;
    render()
  }
}

function render() {
  cookieCountElement.innerHTML = cookieCount;
  cookiesPerClick.innerHTML = addingCount;
  minersCountElement.innerHTML = minersCount;
}

function buyMiner() {
  if (cookieCount >= 100) {
    minersCount++;
    cookieCount -= 100;
    render()
  }
}

var miningProgress = 0;

function update() {
  setTimeout(() => {
    update()
  }, 10)

  if (minersCount < 1) {
    return;
  }

  miningProgress++;

  if (miningProgress >= 100) {
    cookieCount += (minersCount * addingCount)
    miningProgress = 0;
  }

  document.getElementById('mining-progress-bar').value
    = miningProgress;

  render();
}

update();
