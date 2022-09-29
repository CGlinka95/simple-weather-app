// replace your api key
const API_KEY = process.env.RAPID_API_KEY;
const units = `&units=metric`;

// create getWeather function here
const getWeather = (cityName) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}${units}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

// export the getWeather function
export { getWeather };
