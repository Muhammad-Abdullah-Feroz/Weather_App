console.log(`Javascript Started`);
const img = document.querySelector(".img img");
const area = document.querySelector(".name")
const date = document.querySelector(".day-date")
const cond = document.querySelector(".condition")
const temp = document.querySelector(".degree")
const cloud = document.querySelector(".clouds");
const feels = document.querySelector(".feelslike");
const wind = document.querySelector(".wind");
const humid = document.querySelector(".humidity");



async function getWeather(city){
    try{
        let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=54a4b71f227f408980d81843242306&q=${city}&days=3&aqi=no&alerts=no`)
        let parsed = await data.json()
        console.log(parsed);

        let img_url = parsed.current.condition.icon
        let temp_c = parsed.current.temp_c
        let daydate = parsed.location.localtime
        let condition = parsed.current.condition.text
        let placename = `${parsed.location.name}, ${parsed.location.country}` 
        let clouds = `Clouds : ${parsed.current.cloud}%`
        let feelslike = `Feels like : ${parsed.current.feelslike_c}°C`
        let humidity = `Humidity : ${parsed.current.humidity}%`
        let windspeed = `Wind : ${parsed.current.wind_kph}kph`


        console.log(img_url,temp_c,daydate,placename);
        img.setAttribute('src',img_url)
        cond.innerHTML = condition
        area.value = placename
        date.innerHTML = daydate
        temp.innerHTML = temp_c
        cloud.innerHTML = clouds
        feels.innerHTML = feelslike
        wind.innerHTML = windspeed
        humid.innerHTML = humidity
        
    }catch(error){
        console.log(error);
    }
}

area.addEventListener("change",(e)=>{
    getWeather(area.value)
})