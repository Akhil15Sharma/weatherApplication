const temp2 = document.getElementById("temp2");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity2");
const humidity2 = document.getElementById("humidity");
const wind_speed2 = document.getElementById("wind_speed2");
const wind_speed = document.getElementById("wind_speed");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "19d7979c85msh72a8b00e6c2bd0bp1ce29djsnb4da66776af5",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

function TableList() {
  const states = [
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Rajasthan",
    "Punjab",
    "Jammu and Kashmir",
    "Mumbai",
  ];

  const all_rows = document.querySelectorAll("tbody > tr");

  for (let i = 0; i < states.length; i++) {
	const all_colms = all_rows[i].children
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${states[i]}`,
      options
    ).then((response) => response.json()).then((response) => {
		all_colms[1].innerText = response.cloud_pct;
		all_colms[2].innerText = response.feels_like;
		all_colms[3].innerText = response.humidity;
		all_colms[4].innerText = response.max_temp;
		all_colms[5].innerText = response.min_temp;
		all_colms[6].innerText = response.sunrise;
		all_colms[7].innerText = response.sunset;
		all_colms[8].innerText = response.temp;
		all_colms[9].innerText = response.wind_degrees;
		all_colms[10].innerText = response.wind_speed;
      })
      .catch((err) => console.error(err));
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});


TableList();
getWeather("Delhi");
