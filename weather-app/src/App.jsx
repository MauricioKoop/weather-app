import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";

const currentWeatherData = {
  location: "São Paulo",
  temperature: 13,
};

const forecastData = [
  {date: "01/09", minTemp: 10, maxTemp: 28},
  {date: "02/09", minTemp: 11, maxTemp: 38},
  {date: "03/09", minTemp: 23, maxTemp: 18},
  {date: "04/09", minTemp: 13, maxTemp: 24},
  {date: "05/09", minTemp: 20, maxTemp: 25},
  {date: "05/09", minTemp: 8, maxTemp: 26},
  {date: "05/09", minTemp: 11, maxTemp: 27},
  {date: "05/09", minTemp: 12, maxTemp: 28},
];

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <CurrentWeather 
        location={currentWeatherData.location}
        temperature={currentWeatherData.temperature}
      />
      <WeatherForecast forecast={forecastData}/>
    </div>
  </ThemeProvider>
)

export default App;