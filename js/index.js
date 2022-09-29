// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.

import "bootstrap/dist/css/bootstrap.min.css";
import { getWeather } from "./api/base";
import { renderWeather } from "./dom/weather";

const form = document.getElementById("weather-search");

const logWeather = (event) => {
  event.preventDefault();
  let cityName = document.querySelector(".form-control").value;
  getWeather(cityName).then((weathersData) => {
    let weatherDivElement = document.querySelector(".weather-container");
    renderWeather(weathersData, weatherDivElement);
  });
};

form.addEventListener("submit", logWeather);
