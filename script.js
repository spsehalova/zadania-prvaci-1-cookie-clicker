// DOM Elements / DOM Elementy
// Get references to HTML elements for cookie counter and click button
// Získanie referencií na HTML elementy pre počítadlo cookies a tlačidlo kliknutia
const cookieCountElement = document.getElementById('cookie-count')
const getCookieButton = document.getElementById('get-cookie-button')

// Elements for upgrade functionality
// Elementy pre funkciu vylepšenia
const cookiesPerClickElement = document.getElementById('cookies-per-click')
const upgradeButton = document.getElementById('upgrade-button')

// Elements for miner functionality
// Elementy pre funkciu baníkov
const minersCountElement = document.getElementById('miners-count')
const buyMinerButton = document.getElementById('buy-miner-button')
const minerCostElement = document.getElementById('miner-cost')

// Progress bar for mining animation
// Progress bar pre animáciu ťažby
const miningProgressBarElement = document.getElementById('mining-progress-bar')

// Game State Variables / Stavové premenné hry
// Current number of cookies the player has
// Aktuálny počet cookies, ktoré má hráč
let cookieCount = 0;

// Number of cookies earned per click
// Počet cookies získaných za kliknutie
let cookiesPerClick = 1;

// Number of miners owned by the player
// Počet baníkov, ktorých má hráč
let minersCount = 0;

// Mining progress (0-100), starts at 100 for initial calculation
// Progres ťažby (0-100), začína na 100 pre počiatočný výpočet
let miningProgress = 1000 / 10;

// Cost to buy the next miner
// Cena za kúpu ďalšieho baníka
let minerCost = 25;

// UI Update Function / Funkcia aktualizácie používateľského rozhrania
// Updates all display elements with current game state values
// Aktualizuje všetky zobrazované elementy s aktuálnymi hodnotami stavu hry
function render() {
  cookieCountElement.innerHTML = cookieCount;
  cookiesPerClickElement.innerHTML = cookiesPerClick;
  minersCountElement.innerHTML = minersCount;
  minerCostElement.innerHTML = minerCost;
}

// Cookie Clicking Function / Funkcia klikania na cookie
// Called when player clicks the main cookie button
// Volaná keď hráč klikne na hlavné tlačidlo cookie
function getCookie() {
  // Add cookies based on current cookies per click value
  // Pridá cookies na základe aktuálnej hodnoty cookies za kliknutie
  cookieCount += cookiesPerClick;
  render()
}

// Upgrade Function / Funkcia vylepšenia
// Increases cookies per click by spending 5 cookies
// Zvyšuje cookies za kliknutie za cenu 5 cookies
function upgrade() {
  // Check if player has enough cookies to upgrade
  // Kontrola, či má hráč dostatok cookies na vylepšenie
  if (cookieCount < 5) {
    return;
  }

  // Spend 5 cookies to buy the upgrade
  // Minieme 5 cookies na kúpu vylepšenia
  cookieCount -= 5;
  
  // Increase cookies per click by 2
  // Zvýšime cookies za kliknutie o 2
  cookiesPerClick += 2;
  render()
}

// Buy Miner Function / Funkcia kúpy baníka
// Purchases a miner that automatically generates cookies
// Kúpi baníka, ktorý automaticky generuje cookies
function buyMiner() {
  // Check if player has enough cookies to buy a miner
  // Kontrola, či má hráč dostatok cookies na kúpu baníka
  if (cookieCount < minerCost) {
    return;
  }

  // Spend cookies to buy the miner
  // Minieme cookies na kúpu baníka
  cookieCount -= minerCost;
  
  // Increase miner count
  // Zvýšime počet baníkov
  minersCount += 1;

  // Double the cost for the next miner (exponential scaling)
  // Zdvojnásobíme cenu pre ďalšieho baníka (exponenciálne škálovanie)
  minerCost *= 2;

  render();
}

// Mining Function / Funkcia ťažby
// Called when miners complete a mining cycle
// Volaná keď baníci dokončia cyklus ťažby
function mineCookies() {
  // Add cookies based on number of miners and cookies per click multiplier
  // Pridá cookies na základe počtu baníkov a násobiteľa cookies za kliknutie
  cookieCount += (minersCount * cookiesPerClick);
  render()
}

// Game Loop Update Function / Funkcia aktualizácie hernej slučky
// Continuously updates mining progress and handles automatic cookie generation
// Nepretržite aktualizuje progres ťažby a spracováva automatickú generáciu cookies
function update() {
  // Schedule next update in 10 milliseconds (100 FPS)
  // Naplánuje ďalšiu aktualizáciu za 10 milisekúnd (100 FPS)
  setTimeout(() => {
    update()
  }, 10)

  // Skip mining if no miners are owned
  // Preskočí ťažbu ak nie sú vlastnení žiadni baníci
  if (minersCount < 1) {
    return;
  }

  // Increment mining progress
  // Zvýši progres ťažby
  miningProgress += 1;

  // When progress reaches 100, mine cookies and reset progress
  // Keď progres dosiahne 100, vyťaží cookies a resetuje progres
  if (miningProgress >= 100) {
    mineCookies();
    miningProgress = 0;
  }

  // Update the visual progress bar
  // Aktualizuje vizuálny progress bar
  miningProgressBarElement.value = miningProgress;
}

// Game Initialization / Inicializácia hry
// Start the game loop and render initial state
// Spustí hernú slučku a vykreslí počiatočný stav
update();
render();
