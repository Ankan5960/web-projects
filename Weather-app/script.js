const apikey="a6b79f3e370431dd7ca9370737c9aacd";
const urlapi="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchbox=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-icon");

async function getweather(city){
    const response=await fetch(urlapi+city+`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
    }
    else{
        var data= await response.json();

        //console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

        if(data.weather[0].main=="Clouds"){
            weatherImg.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImg.src="images/rain.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherImg.src="images/snow.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherImg.src="images/mist.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherImg.src="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherImg.src="images/drizzle.png";
        }
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
}

searchbutton.addEventListener("click",()=>{
    getweather(searchbox.value);
})

searchbox.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key=== "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchbutton.click();
    }
  });