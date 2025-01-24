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
	const lat = -26.7745146261508;
	const lon = -48.64422810098111;
	const API_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e503de2b1939e5bb863b9f63a362e42`;
	const API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0e503de2b1939e5bb863b9f63a362e42`;

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const currentWeatherResponse = await fetch(API_CURRENT_WEATHER);
				const currentWeatherJson = await currentWeatherResponse.json();

				setCurrentWeatherData({
					location: currentWeatherJson.name,
					temperature: (currentWeatherJson.main.temp - 273.15).toFixed(2)
				});

				// Previsão do tempo 5 dias
				const forecastResponse = await fetch(API_FORECAST);
				const forecastJson = await forecastResponse.json();
				const ForecastOnlyFive = forecastJson.list
				.map((forecast) => ({
					date: forecast.dt_txt.slice(0,10),
					minTemp: (forecast.main.temp_min -273.15).toFixed(2),
					maxTemp: (forecast.main.temp_max -273.15).toFixed(2)
				}))

				console.log(ForecastOnlyFive);
				setForecastData(ForecastOnlyFive);

			}catch (error) {
				console.error("Erro ao buscar os dados:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchWeatherData();
	}, []); // O array vazio garante que o useEffect rode apenas uma vez.
	
	if(loading){
		<div>Carregando dados...</div>
	}

	return(
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			{currentWeatherData && (
				<CurrentWeather
					location={currentWeatherData.location} 
					temperature={currentWeatherData.temperature + " C°"}
				/>
			)}

			{forecastData.length > 0 && <WeatherForecast forecast={forecastData} />}
		</ThemeProvider>
	)
}

export default App;