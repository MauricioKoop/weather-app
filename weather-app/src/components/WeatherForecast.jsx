import styled from "styled-components";

const ForecastContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const DayCard = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    color: white;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    flex: 1;
    min-width: 180px;
`;

const DateText = styled.p`
    margin: 0;
    font-weight: bold;
`;

const Temptext = styled.p`
    margin: 5px 0 0;
`;

const WeatherForecast = ({forecast}) => (
    <ForecastContainer>
        {forecast.map((day, index) => (
            <DayCard key={index}>
                <DateText>{day.date}</DateText>
                <Temptext>{day.minTemp}°C</Temptext>
                <Temptext>{day.maxTemp}°C</Temptext>
            </DayCard>
        ))}
    </ForecastContainer>
);

export default WeatherForecast;