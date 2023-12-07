const Description=document.querySelector('.description');
const Weather_img=document.querySelector('.weather-img');
const Temperature=document.getElementById('temperature');
const Wind_speed=document.getElementById('Wind-speed');
const Humidity_level=document.getElementById('Humidity-level');
const body_img=document.body;

const Search_button=document.getElementById('srchbtn');
const Input_box=document.querySelector('.input-box');

const Weather_box=document.querySelector('.Weather');
const Error_box=document.querySelector('.error');

async function Give_weather(city){
    const api_key="7d3231a9ac5ddda63040ddfce9703cdc";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(url).then(response=>response.json());
    
    if(weather_data.cod===`404`){
        Weather_box.style.display="none";
        Error_box.style.display="flex";
        body_img.style.background="linear-gradient(150deg, #7371db , #151518)"; 
        console.log("Error");
        return;
    }
    console.log("Fetched successfully");
    console.log(weather_data);
    Description.innerHTML=`${weather_data.weather[0].main}`;
    Temperature.innerHTML=`<b>${Math.round(weather_data.main.temp-273)}</b>℃ `;
    Wind_speed.innerHTML=`<b>${weather_data.wind.speed}</b> m/s`;
    Humidity_level.innerHTML=`<b>${weather_data.main.humidity}</b>% `;

   switch(weather_data.weather[0].main){
    case 'Haze':
    body_img.style.backgroundImage="url('assets/haze4.jpeg')";
    Weather_img.src="assets/haze2.png";
    break;
    case 'Clear':
    body_img.style.backgroundImage="url('assets/clear2.jpg')";
    Weather_img.src="assets/clear.png";break;
    case 'Clouds':
    body_img.style.backgroundImage="url('assets/clouds1.jpg')";
    Weather_img.src="assets/cloud.png";break;
    case 'Mist':
    body_img.style.backgroundImage="url('assets/mist2.jpeg')";    
    Weather_img.src="assets/mist2.png";break;
    case 'Smoke':
    body_img.style.backgroundImage="url('assets/haze2.jpg')";    
    Weather_img.src="assets/mist2.png";break;
    case 'Rain':
    body_img.style.backgroundImage="url('assets/rain3.jpg')";
    Weather_img.src="assets/rain1.png";break;
    case 'Snow':
    body_img.style.backgroundImage="url('assets/snow1.jpg')";
    Weather_img.src="assets/snow.png";break;
   }
    Error_box.style.display="none";
    Weather_box.style.display="flex";
}

/* Enter keypress on input box => triggering button click */
function handle_key_press(event){
    if(event.key==='Enter'){
        Search_button.click();
    }
}

Input_box.addEventListener('keypress',handle_key_press);

Search_button.addEventListener('click', ()=>{
    Give_weather(Input_box.value);
});
/*
function getRandomColor() {
    // Generating random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Constructing a CSS color string
    const randomColor = `rgb(${red},${green},${blue})`;
  
    return randomColor;
  }
  
  function changeColor() {
    const element = document.querySelector('.body');
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    
    // Applying the random color to the element's background
    element.style.background = `linear-gradient(120deg, ${randomColor1},${randomColor2})`;
  }*/
  
