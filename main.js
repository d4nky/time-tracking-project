
// Data
const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
]


// Variables
const workTitle = document.querySelector('.title-work');
const workCurrent = document.querySelector('.current-work');
const workPrevious = document.querySelector('.previous-work');

const playTitle = document.querySelector('.title-play');
const playCurrent = document.querySelector('.current-play');
const playPrevious = document.querySelector('.previous-play');

const studyTitle = document.querySelector('.title-study');
const studyCurrent = document.querySelector('.current-study');
const studyPrevious = document.querySelector('.previous-study');

const exerciseTitle = document.querySelector('.title-exercise');
const exerciseCurrent = document.querySelector('.current-exercise');
const exercisePrevious = document.querySelector('.previous-exercise');

const socialTitle = document.querySelector('.title-social');
const socialCurrent = document.querySelector('.current-social');
const socialPrevious = document.querySelector('.previous-social');

const selfcareTitle = document.querySelector('.title-selfcare');
const selfcareCurrent = document.querySelector('.current-selfcare');
const selfcarePrevious = document.querySelector('.previous-selfcare');


// Buttons
const daily = document.getElementById('daily-button');
const weekly = document.getElementById('weekly-button')
const monthly = document.getElementById('monthly-button')


const workData = data[0];
const playData = data[1];
const studyData = data[2];
const exerciseData = data[3];
const socialData = data[4];
const selfcareData = data[5];

// Functions
daily.addEventListener('click', function(){
    workCurrent.innerHTML = `${workData
    .timeframes.daily.current}hrs`;
    workPrevious.innerHTML = `Last Day - ${workData
    .timeframes.daily.previous}hrs`;

    playCurrent.innerHTML = `${playData
    .timeframes.daily.current}hrs`;
    playPrevious.innerHTML = `Last Day - ${playData
    .timeframes.daily.previous}hrs`;

    studyCurrent.innerHTML = `${studyData
    .timeframes.daily.current}hrs`;
    studyPrevious.innerHTML = `Last Day - ${studyData
    .timeframes.daily.previous}hrs`;

    exerciseCurrent.innerHTML = `${exerciseData
    .timeframes.daily.current}hrs`;
    exercisePrevious.innerHTML = `Last Day - ${exerciseData
    .timeframes.daily.previous}hrs`;

    socialCurrent.innerHTML = `${socialData
    .timeframes.daily.current}hrs`;
    socialPrevious.innerHTML = `Last Day - ${socialData
    .timeframes.daily.previous}hrs`;

    selfcareCurrent.innerHTML = `${selfcareData
    .timeframes.daily.current}hrs`;
    selfcarePrevious.innerHTML = `Last Day - ${selfcareData
    .timeframes.daily.previous}hrs`;
})
weekly.addEventListener('click', function(){
    workCurrent.innerHTML = `${workData
    .timeframes.weekly.current}hrs`;
    workPrevious.innerHTML = `Last Week - ${workData
    .timeframes.weekly.previous}hrs`;

    playCurrent.innerHTML = `${playData
    .timeframes.weekly.current}hrs`;
    playPrevious.innerHTML = `Last Week - ${playData
    .timeframes.weekly.previous}hrs`;

    studyCurrent.innerHTML = `${studyData
    .timeframes.weekly.current}hrs`;
    studyPrevious.innerHTML = `Last Week - ${studyData
    .timeframes.weekly.previous}hrs`;

    exerciseCurrent.innerHTML = `${exerciseData
    .timeframes.weekly.current}hrs`;
    exercisePrevious.innerHTML = `Last Week - ${exerciseData
    .timeframes.weekly.previous}hrs`;

    socialCurrent.innerHTML = `${socialData
    .timeframes.weekly.current}hrs`;
    socialPrevious.innerHTML = `Last Week - ${socialData
    .timeframes.weekly.previous}hrs`;

    selfcareCurrent.innerHTML = `${selfcareData
    .timeframes.weekly.current}hrs`;
    selfcarePrevious.innerHTML = `Last Week - ${selfcareData
    .timeframes.weekly.previous}hrs`;
}) 
monthly.addEventListener('click', function(){
    workCurrent.innerHTML = `${workData
    .timeframes.monthly.current}hrs`;
    workPrevious.innerHTML = `Last Month - ${workData
    .timeframes.monthly.previous}hrs`;

    playCurrent.innerHTML = `${playData
    .timeframes.monthly.current}hrs`;
    playPrevious.innerHTML = `Last Month - ${playData
    .timeframes.monthly.previous}hrs`;

    studyCurrent.innerHTML = `${studyData
    .timeframes.monthly.current}hrs`;
    studyPrevious.innerHTML = `Last Month - ${studyData
    .timeframes.monthly.previous}hrs`;

    exerciseCurrent.innerHTML = `${exerciseData
    .timeframes.monthly.current}hrs`;
    exercisePrevious.innerHTML = `Last Month - ${exerciseData
    .timeframes.monthly.previous}hrs`;

    socialCurrent.innerHTML = `${socialData
    .timeframes.monthly.current}hrs`;
    socialPrevious.innerHTML = `Last Month - ${socialData
    .timeframes.monthly.previous}hrs`;

    selfcareCurrent.innerHTML = `${selfcareData
    .timeframes.monthly.current}hrs`;
    selfcarePrevious.innerHTML = `Last Month - ${selfcareData
    .timeframes.monthly.previous}hrs`;
}) 