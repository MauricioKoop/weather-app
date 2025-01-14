import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";



const App = () => {
	const [currentWeatherData, setCurrentWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState([]);
	const [loading, setLoading] = useState(true);
	
	// Aqui serão definidas as chaves da API
	const API_KEY = 0e503de2b1939e5bb863b9f63a362e42;
	const lat = -15.7975;
	const lon = -47.8919;

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const currentWeatherResponse = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
				);
				const currentWeatherJson = currentWeatherResponse.json();
				setCurrentWeatherData({
					location: currentWeatherJson.name,
					temperature: currentWeatherJson.main.temp
				});

				// Previsão do tempo 5 dias
				
			}
		}
	})
	
}

export default App;