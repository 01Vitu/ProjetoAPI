const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const weatherBox = document.createElement('div');
weatherBox.classList.add('weather-box');
document.body.appendChild(weatherBox);

searchBtn.addEventListener('click', () => {
    getWeather(searchBar.value);
});

function getWeather(city) {
    const apiKey = 'ff3c2b875499602404d24c263c700b9c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function displayWeather(data) {
    const city = data.name;
    const weather = data.weather[0].description;
    const temperature = data.main.temp;

    const cityElement = document.createElement('h2');
    cityElement.textContent = city;
    weatherBox.innerHTML = '';
    weatherBox.appendChild(cityElement);

    const weatherElement = document.createElement('p');
    weatherElement.textContent = weather;
    weatherBox.appendChild(weatherElement);

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `${temperature}°C`;
    weatherBox.appendChild(temperatureElement);
}
