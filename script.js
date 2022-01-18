const apiKey = key_obj.apiKey;

const input = document.querySelector('#search-bar')
const searchButton = document.querySelector('#search-btn')
const container = document.querySelector('.container')

function displayWeather(data) {
    // using object destructuring
    const {name} = data
    const {temp, humidity} = data.main 
    const {speed} = data.wind
    const {description, icon} = data.weather[0]
    
    document.querySelector('#city').innerHTML = name
    document.querySelector('#temperature').innerHTML = temp + '°C'
    document.querySelector('#desc').innerHTML = description
    document.querySelector('#humid').innerHTML = 'Humidity: ' + humidity + '%'
    document.querySelector('#wind').innerHTML = `Wind Speed: ${speed * 3.6}km/h`
    document.querySelector('#icon').src = 'https://openweathermap.org/img/wn/' +icon+ '.png'
    document.querySelector('#weather').classList.remove('load')
    document.querySelector('#card-weather').classList.remove('load')
    container.style.backgroundImage = `url(https://source.unsplash.com/featured/1280x800/?${name})`
    // container.style.backgroundSize = 'cover'
    container.style.backgroundRepeat = 'no-repeat'
    
}

function getWeatherData(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid='+ apiKey)
    .then((res) => res.json())
    .then((data) => displayWeather(data))
}

searchButton.addEventListener('click', function() {
    getWeatherData(input.value)
})