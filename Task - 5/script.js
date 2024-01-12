const apiKey = "5b1441eefda3e0f36e31c15c8c5926d9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})