const apiKey = '986b58dad62cf3ba0d39efcdd90cd223';
const error = document.getElementById('error');
const input = document.getElementById('search-box');

const submit = document.getElementById('submit');
const h2 = document.querySelector('h2');
const tempP = document.getElementById('temp');
const realFeelP = document.getElementById('real-feel');
const weatherIconP = document.getElementById('weather-icon');

const celcius = document.querySelector('.celcius');
const fahrenheit = document.querySelector('.fahrenheit');

let city = 'dalyan';
let unit = 'metric';
let symbol = '°C';

const weatherIcons = [
  { id: 200, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 201, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 202, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 210, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 211, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 212, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 221, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 230, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 231, url: 'http://openweathermap.org/img/wn/11d@2x.png' },
  { id: 232, url: 'http://openweathermap.org/img/wn/11d@2x.png' },

  { id: 300, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 301, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 302, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 310, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 311, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 312, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 313, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 314, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 321, url: 'http://openweathermap.org/img/wn/09d@2x.png' },

  { id: 500, url: 'http://openweathermap.org/img/wn/10d@2x.png' },
  { id: 501, url: 'http://openweathermap.org/img/wn/10d@2x.png' },
  { id: 502, url: 'http://openweathermap.org/img/wn/10d@2x.png' },
  { id: 503, url: 'http://openweathermap.org/img/wn/10d@2x.png' },
  { id: 504, url: 'http://openweathermap.org/img/wn/10d@2x.png' },
  { id: 511, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 520, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 521, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 522, url: 'http://openweathermap.org/img/wn/09d@2x.png' },
  { id: 531, url: 'http://openweathermap.org/img/wn/09d@2x.png' },

  { id: 600, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 601, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 602, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 611, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 612, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 613, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 615, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 616, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 620, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 621, url: 'http://openweathermap.org/img/wn/13d@2x.png' },
  { id: 622, url: 'http://openweathermap.org/img/wn/13d@2x.png' },

  { id: 701, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 711, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 721, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 731, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 741, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 751, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 761, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 762, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 771, url: 'http://openweathermap.org/img/wn/50d@2x.png' },
  { id: 781, url: 'http://openweathermap.org/img/wn/50d@2x.png' },

  { id: 800, url: 'http://openweathermap.org/img/wn/01d@2x.png' },
  { id: 801, url: 'http://openweathermap.org/img/wn/02d@2x.png' },
  { id: 802, url: 'http://openweathermap.org/img/wn/03d@2x.png' },
  { id: 803, url: 'http://openweathermap.org/img/wn/04d@2x.png' },
  { id: 804, url: 'http://openweathermap.org/img/wn/04d@2x.png' },
];

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getNewWeather();
  }
});

submit.addEventListener('click', getNewWeather);

celcius.addEventListener('click', changeUnitsToCelcius);
fahrenheit.addEventListener('click', changeUnitsToFahrenheit);

async function getWeather() {
  try {
    error.textContent = '';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);

    const temp = Math.floor(weatherData.main.temp);
    const realFeel = Math.floor(weatherData.main.feels_like);
    const precipitation = 's';

    tempP.textContent = `Temperature: ${temp} ${symbol}`;
    realFeelP.textContent = `Real-feel: ${realFeel} ${symbol}`;

    let icon = weatherIcons.find((id) => id.id === weatherData.weather[0].id);

    weatherIconP.src = icon.url;
  } catch {
    error.textContent = 'City NOT found!';
  }
}

getWeather();

function getNewWeather() {
  city = input.value;
  h2.textContent = `${city} Weather`;
  h2.classList.add('capitalize');

  getWeather();
}

function changeUnitsToCelcius() {
  unit = 'metric';
  symbol = '°C';
  celcius.style.background = 'rgb(96, 168, 190)';
  celcius.style.color = 'white';
  fahrenheit.style.color = 'black';
  fahrenheit.style.background = 'none';
  getWeather();
}

function changeUnitsToFahrenheit() {
  unit = 'imperial';
  symbol = 'F';
  fahrenheit.style.background = 'rgb(96, 168, 190)';
  fahrenheit.style.color = 'white';
  celcius.style.color = 'black';
  celcius.style.background = 'none';
  getWeather();
}
