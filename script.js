const cookieCountElement = document.getElementById('cookie-count')
const getCookieButton = document.getElementById('get-cookie-button')

const cookiesPerClickElement = document.getElementById('cookies-per-click')
const upgradeButton = document.getElementById('upgrade-button')

const minersCountElement = document.getElementById('miners-count')
const buyMinerButton = document.getElementById('buy-miner-button')

const miningProgressBarElement = document.getElementById('mining-progress-bar')

let cookieCount = 0;
let cookiesPerClick = 1;
let minersCount = 0;
let miningProgress = 1000 / 10;

getCookieButton.addEventListener('click', () => {
  getCookie()
})

upgradeButton.addEventListener('click', () => {
  upgrade()
})

buyMinerButton.addEventListener('click', () => {
  buyMiner()
})

function render() {
  cookieCountElement.innerHTML = cookieCount;
  cookiesPerClickElement.innerHTML = cookiesPerClick;
  minersCountElement.innerHTML = minersCount;
}

function getCookie() {
  cookieCount += cookiesPerClick;
  render()
}

function upgrade() {
  if (cookieCount < 5) {
    return;
  }

  cookieCount -= 5;
  cookiesPerClick += 2;
  render()
}

function buyMiner() {
  if (cookieCount < 25) {
    return;
  }

  cookieCount -= 25;
  minersCount += 1;
  render();
}

// function mineCookies() {
//   setTimeout(() => {
//     mineCookies()
//   }, 1000)
//
//   if (minersCount < 1) {
//     return;
//   }
//
//   cookieCount += (minersCount * 5);
//   render()
// }
//
// mineCookies();

function mineCookies() {
  cookieCount += (minersCount * 5);
  render()
}

function update() {
  setTimeout(() => {
    update()
  }, 10)

  if (minersCount < 1) {
    return;
  }

  miningProgress += 1;

  if (miningProgress >= 100) {
    mineCookies();
    miningProgress = 0;
  }

  miningProgressBarElement.value = miningProgress;
}

update();

render();
