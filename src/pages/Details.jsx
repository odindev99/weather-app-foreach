import { useContext } from "react";
import { useLocation } from "react-router-dom";
import DetailsWeatherCard from "../components/DetailsWeatherCard/DetailsWeatherCard";
import WeatherChart from "../components/WeatherChart/WeatherChart";
import { WeatherContext } from "../context/WeatherContext";
import WeatherApi from "../services/WeatherApi";

const Details = () => {
	const { weatherDataByDayName } = useContext(WeatherContext);
	const location = useLocation();
	const dateName = location.state.dateName;

	return (
		<div className="max-width flex flex-col items-center">
			<DetailsWeatherCard
				weatherDayData={weatherDataByDayName[dateName]}
				dateName={dateName}
			/>

			<WeatherChart
				data={WeatherApi.formatDataByDayForDetailsChart(
					weatherDataByDayName,
					dateName
				)}
				title="Variacion de Temperatura Promedio por Hora"
				xAxieLabel="Hora"
			/>
		</div>
	);
};

export default Details;
