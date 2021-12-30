const APIKEY="e83da5f873e87cdb3ede6f7f2e751ef5"

function getPosition(position){
    console.log(position)
    const lat = position.coords.latitude;
    const longt = position.coords.longitude;
    console.log("You live in",lat,longt)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=${APIKEY}&units=metric`
    console.log(url)
    fetch(url).then( response => response.json()) .then(data => {
        const temp = data.main.temp
        const city= data.name
        const weather = data.weather[0].main
        console.log(temp,name,weather)
        const weatherContainer = document.getElementById("weather")
        const tempEl = weatherContainer.querySelector(".city")
        const weatherEl = weatherContainer.querySelector(".weather")
        const cityEl = weatherContainer.querySelector(".temp")

        tempEl.innerText=`${temp}`
        weatherEl.innerText=`${weather}`
        cityEl.innerText=`${city}`
    })
}
function getError(){
    console.log("can't find location")
}
navigator.geolocation.getCurrentPosition(getPosition,getError);

