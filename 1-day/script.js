const tempClass = document.querySelector(".temp")
const cityClass = document.querySelector(".city")
const searchedCity = document.querySelector(".search input")
const humidityClass = document.querySelector(".humidity")
const windClass = document.querySelector(".wind")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

searchButton.addEventListener("click", (event) => {

    const city = searchedCity.value
    if (city) {
        checkWeather(city)
    } else {
        alert("Please enter a city")
    }

})

async function checkWeather(city) {
    const apiKey = "31eae7c520becded757b645e7969a308"
    const units = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

    const response = await fetch(url)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json()

        tempClass.innerHTML = `${Math.round(data.main.temp)}°C`
        cityClass.innerHTML = data.name
        humidityClass.innerHTML = `${data.main.humidity}%`
        windClass.innerHTML = `${data.wind.speed} km/h`

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }



}