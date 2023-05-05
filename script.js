const apiKey = "758326e09c637c404655d52d21eef1b5";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) => "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1b0e9e90c06f650a8d835b90a1849910&units=metric#";

async function getWeatherByLocation(city) {
	const resp = await fetch(url(city), {
		origin : "cros",
	});
	const respData = await resp.json();
	console.log(respData);
	addWeatherToPage(respData);
};

function addWeatherToPage(data){
	const temp = Math.floor(data.main.temp);

	const weather = document.createElement('div')
	weather.classList.add('weather');

	weather.innerHTML = 	`	
	<div class="container">
	<h3>${data.name}</h3>
	<h2>
	<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> 
	${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
	</h2>
	<small>${data.weather[0].main}</small>
	</div>`;

 //   cleanup 
	main.innerHTML= "";
	 main.appendChild(weather);
};

form.addEventListener('submit',(e) =>{
 e.preventDefault();

 let city = search.value;

 if(city){
	getWeatherByLocation(city)
 }

});