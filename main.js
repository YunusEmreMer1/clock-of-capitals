document.addEventListener('DOMContentLoaded', () => {



let clockElement = document.querySelector('.clock');
let timerId = undefined;
let activeClock = undefined;

const istanbulBtn = document.getElementById('istanbul');
istanbulBtn.addEventListener('click', istanbul);

const londonBtn = document.getElementById('london');
londonBtn.addEventListener('click', london);

const washingtonBtn = document.getElementById('washington');
washingtonBtn.addEventListener('click', washington);

const parisBtn = document.getElementById('paris');
parisBtn.addEventListener('click', paris);

// Istanbul Clock Logic


function startClock(clockFunc) {
    if (activeClock !== clockFunc) {
        clearInterval(timerId);
        clockFunc();
        activeClock = clockFunc;
        timerId = setInterval(clockFunc, 1000);
    }
}


function istanbul() {
    startClock(() => {
      let istanbulTime = new Date().toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul' });
      clockElement.textContent = istanbulTime;
    });
  }

// London Clock Logic

function london() {
    startClock(() => {
      let londonTime = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' });
      clockElement.textContent = londonTime;
      activeClock = london;
    });
  }

// Washington Clock Logic

function washington() {
    startClock(() => {
        let options = { timeZone: 'America/New_York', hour12: false };
        let washingtonTime = new Date().toLocaleTimeString('en-US', options);
        clockElement.textContent = washingtonTime;
        activeClock = washington;
    });
}


// Paris Clock Logic

function paris() {
    startClock(() => {
      let parisTime = new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' });
      clockElement.textContent = parisTime;
      activeClock = paris;
    });
  }


istanbul();

// JavaScript

























});