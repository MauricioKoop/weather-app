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
	const API_CONECTION = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e503de2b1939e5bb863b9f63a362e42`;

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const currentWeatherResponse = await fetch(API_CONECTION);
				const currentWeatherJson = await currentWeatherResponse.json();

				setCurrentWeatherData({
					location: currentWeatherJson.name,
					temperature: (currentWeatherJson.main.temp - 273.15).toFixed(2)
				});

				// Previsão do tempo 5 dias
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
		</ThemeProvider>
	)
}

export default App;