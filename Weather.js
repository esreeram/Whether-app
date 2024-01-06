const apikey = "acf6d4141fa1835cb00e99d1026caf38";
const apiupi="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
async function checkwhether(city)
{
    const result = await fetch(apiupi + city +`&appid=${apikey}`);
    const data = await result.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".info").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".info1").innerHTML = data.main.humidity + "%";
    document.querySelector(".info2").innerHTML = data.wind.speed + "kmph";   
}
searchbtn.addEventListener("click",()=>{
    checkwhether(search.value);
})
