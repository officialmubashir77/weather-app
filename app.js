const input_search = document.querySelector('.input-search');
const search_btn = document.querySelector('#search-btn');
const icon = document.querySelector('.icon') ;
const weather = document.querySelector('.weather') ;
const temprature = document.querySelector('.temprature') ;
const description = document.querySelector('.description') ;
const weather_box = document.querySelector('.weather-box') ;
const weather_box2 = document.querySelector('.weather-box2') ;
const short_country = document.querySelector('.short-country') ;
const country_name = document.querySelector('.country-name') ;
const humidity_percent = document.querySelector('.humidity-percent') ;
const wind_kmh = document.querySelector('.wind-kmh') ;

// Not Working my Api key .
// const apiKey = '287d2729f23e4b1b619d279f74f50ed3' ;

// This api key we copy 
const apiKey = 'd54fd4c977cbc6eaf2350839aea99eb3' ;

search_btn.addEventListener('click' , (event) => {
    event.preventDefault() ;
    // console.log("Work");
    // console.log(input_search.value);

    let city = input_search.value ;

    getWeather(city) ;

})

function getWeather(city) {
    // console.log(city);


   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())

  .then(data => {
      
    // console.log(data.main.temp);

    if (data.cod == 404) {
      weather_box.style.display = "none" ; 
      weather_box2.style.display = "flex" ; 
      weather_box2.style.flexDirection = "column" ; 
    }
    else{
      weather_box.style.display = "flex" ; 
      weather_box.style.flexDirection = "column" ; 
      weather_box2.style.display = "none" ; 
      
    }


    if (data.weather[0].main == 'Clouds') {
      icon.firstElementChild.src  = './assets/cloud.png';
    }
    else if (data.weather[0].main == 'Clear') {
      icon.firstElementChild.src  = './assets/clear.png';
      
    }
    else if (data.weather[0].main == 'Rain') {
      icon.firstElementChild.src  = './assets/rain.png';
      
    }
    else if (data.weather[0].main == 'Mist') {
      icon.firstElementChild.src  = './assets/mist.png';
      
    }
    else if (data.weather[0].main == 'Snow') {
      icon.firstElementChild.src  = './assets/snow.png';
      
    }
    else{
      icon.firstElementChild.src  = './assets/clear.png';
    }

    short_country.innerText = data.sys.country; 
    country_name.innerText = data.name; 
    humidity_percent.innerText = data.main.humidity+"%" ; 
    wind_kmh.innerText = data.wind.speed+"Km/H" ;
    temprature.innerHTML = `${Math.round(data.main.temp - 273.15)}<sup class="celcius">°C</sup>`;
    

    // icon.innerHTML = `<img src="https://api.openweathermap.org/img/wn/${iconCode}.png" alt="weather-icon"/>`;
    })

  .catch(error => {  console.error(error);  });
      



}








// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}